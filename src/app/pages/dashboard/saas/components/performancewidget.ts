import { ChangeDetectorRef, Component, inject, Input, OnChanges, OnDestroy, OnInit, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { LayoutService } from '@/layout/service/layout.service';
import { debounceTime, Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'performance-widget',
    standalone: true,
    imports: [ChartModule],
    template: `<div class="flex flex-col gap-4 rounded-md border h-full w-full border-surface p-6">
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-4">
                <div>
                    <i class="pi pi-chart-bar text-primary text-3xl"></i>
                </div>
                <div class="flex flex-col justify-between gap-1">
                    <span class="font-bold text-surface-900 dark:text-surface-0">My Performance</span>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 w-full -mb-6 relative">
            <div class="card">
                <p-chart type="bar" [data]="data" [options]="options" class="h-[30rem]" />
            </div>
        </div>
    </div>`,
    host: {
        class: 'col-span-12 md:col-span-12'
    }
})
export class PerformanceWidget implements OnChanges, OnDestroy {
    layoutService = inject(LayoutService);

    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    subscription!: Subscription;

    @Input() estadistica: any = []

    constructor(
        private cdr: ChangeDetectorRef
    ) {
        this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(50)).subscribe(() => {
            this.initChart();
        });
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes['estadistica'] && changes['estadistica'].currentValue) {
            this.initChart();
        }
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    initChart() { if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.cdr.detectChanges();
            this.data = {
                labels: ['Tareas'],
                datasets: [
                    {
                        label: 'Asignadas',
                        backgroundColor: documentStyle.getPropertyValue('--p-yellow-300'),
                        borderColor: documentStyle.getPropertyValue('--p-yellow-300'),
                        data: [this.estadistica[0]?.quantity]
                    },
                    {
                        label: 'Activas',
                        backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        data: [this.estadistica[1]?.quantity]
                    },
                    {
                        label: 'Completadas',
                        backgroundColor: documentStyle.getPropertyValue('--p-green-500'),
                        borderColor: documentStyle.getPropertyValue('--p-green-500'),
                        data: [this.estadistica[2]?.quantity]
                    },
                    {
                        label: 'Bloqueadas',
                        backgroundColor: documentStyle.getPropertyValue('--p-red-200'),
                        borderColor: documentStyle.getPropertyValue('--p-red-200'),
                        data: [this.estadistica[3]?.quantity]
                    }
                ]
            };

            this.options = {
                indexAxis: 'y',
                maintainAspectRatio: false,
                aspectRatio: 0.8,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary,
                            font: {
                                weight: 500
                            }
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    }
                }
            };
            // this.cd.markForCheck()
        }
    }
}

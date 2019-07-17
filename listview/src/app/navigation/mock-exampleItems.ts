import { ExampleItem } from './exampleItem';

export let EXCLUDED_EXAMPLEITEMS: { title: string, platform: string }[] = [
    {
        "title": "Collapsible Grouping",
        "platform": "ios"
    }
];

export let EXAMPLEITEMS: ExampleItem[] = [
    {
        "title": "ListView Angular",
        "path": "",
        "subItems": [
            {
                "title": "Getting Started",
                "path": "ListViewGettingStartedComponent/ListViewGettingStartedComponent",
                "subItems": []
            },
            {
                "title": "Getting Started Horizontal",
                "path": "ListViewGettingStartedHorizontalComponent/ListViewGettingStartedHorizontalComponent",
                "subItems": []
            },
            {
                "title": "Initially load 10 000 items",
                "path": "ListViewWithBigDataComponent/ListViewWithBigDataComponent",
                "subItems": []
            },
            {
                "title": "Data Operations",
                "path": "",
                "subItems": [
                    {
                        "title": "Filtering",
                        "path": "ListViewDataOperationsFilteringComponent/ListViewDataOperationsFilteringComponent",
                        "subItems": []
                    },
                    {
                        "title": "Sorting",
                        "path": "ListViewDataOperationsSortingComponent/ListViewDataOperationsSortingComponent",
                        "subItems": []
                    },
                    {
                        "title": "Grouping",
                        "path": "ListViewDataOperationsGroupingComponent/ListViewDataOperationsGroupingComponent",
                        "subItems": []
                    },
                    {
                        "title": "Grouping with Scroll to Index",
                        "path": "ListViewDataOperationsGroupingScrollToComponent/ListViewDataOperationsGroupingScrollToComponent",
                        "subItems": []
                    },
                    {
                        "title": "Grouping with header/footer",
                        "path": "ListViewDataOperationsGroupingHeaderFooterComponent/ListViewDataOperationsGroupingHeaderFooterComponent",
                        "subItems": []
                    },
                    {
                        "title": "Grouping with multiple templates",
                        "path": "ListViewDataOperationsGroupingTemplatesComponent/ListViewDataOperationsGroupingTemplatesComponent",
                        "subItems": []
                    },
                    {
                        "title": "Collapsible Grouping",
                        "path": "ListviewDataOperationsGroupingCollapsibleComponent/ListviewDataOperationsGroupingCollapsibleComponent",
                        "subItems": []
                    },
                    {
                        "title": "Multiple operations",
                        "path": "ListViewDataOperationsMultipleComponent/ListViewDataOperationsMultipleComponent",
                        "subItems": []
                    }
                    ,
                    {
                        "title": "With Swipe",
                        "path": "ListViewDataOperationsMultipleWithSwipeComponent/ListViewDataOperationsMultipleWithSwipeComponent",
                        "subItems": []
                    }
                ]
            },
            {
                "title": "Multiple Item Templates",
                "path": "ListViewMultipleTemplatesComponent/ListViewMultipleTemplatesComponent",
                "subItems": []
            },
            {
                "title": "Item Loading",
                "path": "ListViewItemLoadingComponent/ListViewItemLoadingComponent",
                "subItems": []
            },
            {
                "title": "Item Animations",
                "path": "ListViewItemAnimationsComponent/ListViewItemAnimationsComponent",
                "subItems": []
            },
            {
                "title": "Item Layouts",
                "path": "",
                "subItems": [
                    {
                        "title": "Linear",
                        "path": "ListViewItemLayoutsLinearComponent/ListViewItemLayoutsLinearComponent",
                        "subItems": []
                    },
                    {
                        "title": "Grid with item height",
                        "path": "ListViewItemLayoutsGridComponent/ListViewItemLayoutsGridComponent",
                        "subItems": []
                    },
                    {
                        "title": "Grid without item height",
                        "path": "ListViewItemLayoutsGridNoHeightComponent/ListViewItemLayoutsGridNoHeightComponent",
                        "subItems": []
                    },
                    {
                        "title": "Staggered",
                        "path": "ListViewItemLayoutsStaggeredComponent/ListViewItemLayoutsStaggeredComponent",
                        "subItems": []
                    },
                    {
                        "title": "Change at runtime",
                        "path": "ListViewItemLayoutsRuntimeComponent/ListViewItemLayoutsRuntimeComponent",
                        "subItems": []
                    }
                ]
            },
            {
                "title": "Item Reorder",
                "path": "ListViewItemReorderComponent/ListViewItemReorderComponent",
                "subItems": []
            },
            {
                "title": "Item Reorder with handle",
                "path": "ListViewItemReorderHandleComponent/ListViewItemReorderHandleComponent",
                "subItems": []
            },
            {
                "title": "Selection",
                "path": "",
                "subItems": [
                    {
                        "title": "Single Selection",
                        "path": "ListViewItemSelectionComponent/ListViewItemSelectionComponent",
                        "subItems": []
                    },
                    {
                        "title": "Multiple Selection",
                        "path": "ListViewItemSelectionMultipleComponent/ListViewItemSelectionMultipleComponent",
                        "subItems": []
                    },
                    {
                        "title": "Programmatic Selection",
                        "path": "ListViewItemSelectionProgrammaticComponent/ListViewItemSelectionProgrammaticComponent",
                        "subItems": []
                    }
                ]
            },
            {
                "title": "Selection States",
                "path": "ListViewSelectionStatesComponent/ListViewSelectionStatesComponent",
                "subItems": []
            },
            {
                "title": "Load on Demand",
                "path": "",
                "subItems": [
                    {
                        "title": "Manual with Fixed Item Size",
                        "path": "ListViewFixedSizeManualComponent/ListViewFixedSizeManualComponent",
                        "subItems": []
                    },
                    {
                        "title": "Auto with Fixed Item Size",
                        "path": "ListViewFixedSizeAutoComponent/ListViewFixedSizeAutoComponent",
                        "subItems": []
                    },
                    {
                        "title": "Manual with Variable Item Size",
                        "path": "ListViewDynamicSizeManualComponent/ListViewDynamicSizeManualComponent",
                        "subItems": []
                    },
                    {
                        "title": "Auto with Variable Item Size",
                        "path": "ListViewDynamicSizeAutoComponent/ListViewDynamicSizeAutoComponent",
                        "subItems": []
                    },
                    {
                        "title": "With small source and pull to refresh",
                        "path": "ListViewFixedSizeAutoWithSmallSourceComponent/ListViewFixedSizeAutoWithSmallSourceComponent",
                        "subItems": []
                    }
                ]
            },
            {
                "title": "Observable Array",
                "path": "ListViewObservableArrayComponent/ListViewObservableArrayComponent",
                "subItems": []
            },
            {
                "title": "Pull to Refresh",
                "path": "ListViewPullToRefreshComponent/ListViewPullToRefreshComponent",
                "subItems": [
                    {
                        "title": "Getting Started",
                        "path": "ListViewPullToRefreshComponent/ListViewPullToRefreshComponent",
                        "subItems": []
                    },
                    {
                        "title": "Customize indicator/background",
                        "path": "ListViewPullToRefreshCustomizeComponent/ListViewPullToRefreshCustomizeComponent",
                        "subItems": []
                    },
                ]
            },
            {
                "title": "Swipe actions",
                "path": "",
                "subItems": [
                    {
                        "title": "Getting Started",
                        "path": "ListViewSwipeActionsComponent/ListViewSwipeActionsComponent",
                        "subItems": []
                    },
                    {
                        "title": "Animated thresholds",
                        "path": "ListViewSwipeActionsThresholdsComponent/ListViewSwipeActionsThresholdsComponent",
                        "subItems": []
                    },
                    {
                        "title": "Multiple actions",
                        "path": "ListViewSwipeActionsMultipleComponent/ListViewSwipeActionsMultipleComponent",
                        "subItems": []
                    },
                    {
                        "title": "Disable\\Enable",
                        "path": "ListViewSwipeDisableComponent/ListViewSwipeDisableComponent",
                        "subItems": []
                    }
                ]
            },
            {
                "title": "Header and Footer",
                "path": "",
                "subItems": [
                    {
                        "title": "Auto height",
                        "path": "ListViewHeaderFooterComponent/ListViewHeaderFooterComponent",
                        "subItems": []
                    },
                    {
                        "title": "Big header",
                        "path": "ListViewBigHeaderComponent/ListViewBigHeaderComponent",
                        "subItems": []
                    },
                    {
                        "title": "Big footer",
                        "path": "ListViewBigFooterComponent/ListViewBigFooterComponent",
                        "subItems": []
                    },
                    {
                        "title": "Change at runtime",
                        "path": "ListviewChangeSizeAtRuntimeComponent/ListviewChangeSizeAtRuntimeComponent",
                        "subItems": []
                    }
                ]
            },
            {
                "title": "Item separators",
                "path": "ListViewItemSeparatorComponent/ListViewItemSeparatorComponent",
                "subItems": []
            },
            {
                "title": "Scroll to index",
                "path": "",
                "subItems": [
                    {
                        "title": "In vertical direction",
                        "path": "ListViewScrollToIndexVerticalComponent/ListViewScrollToIndexVerticalComponent",
                        "subItems": []
                    },
                    {
                        "title": "In horizontal direction",
                        "path": "ListViewScrollToIndexHorizontalComponent/ListViewScrollToIndexHorizontalComponent",
                        "subItems": []
                    },
                    {
                        "title": "Initially scrolled",
                        "path": "ListViewScrollToIndexInitialComponent/ListViewScrollToIndexInitialComponent",
                        "subItems": []
                    }
                ]
            },
            {
                "title": "Scroll Events",
                "path": "ListViewScrollEventsComponent/ListViewScrollEventsComponent",
                "subItems": []
            },
            {
                "title": "Horizontal with Variable item's width",
                "path": "ListviewHorizontalWithVariableItemWidthComponent/ListviewHorizontalWithVariableItemWidthComponent",
                "subItems": []
            },
            {
                "title": "Group, Swipe, Load and Pull",
                "path": "ListViewGroupSwipeLoadPullComponent/ListViewGroupSwipeLoadPullComponent",
                "subItems": []
            },
            {
                "title": "Get first visible index",
                "path": "ListViewFirstVisibleIndexComponent/ListViewFirstVisibleIndexComponent",
                "subItems": []
            },
            {
                "title": "Custom Angular comp in template",
                "path": "ListviewCompTemplateComponent/ListviewCompTemplateComponent",
                "subItems": []
            }
        ]
    }
];
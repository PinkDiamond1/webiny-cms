import { CmsModelPlugin } from "@webiny/api-headless-cms/content/plugins/CmsModelPlugin";
import { CmsGroupPlugin } from "@webiny/api-headless-cms/content/plugins/CmsGroupPlugin";

export default [
    new CmsGroupPlugin({
        id: "atoms",
        name: "Atoms",
        slug: "atoms",
        icon: "fas/id-card-alt",
        description: ""
    }),
    new CmsModelPlugin({
        name: "Atoms Address",
        modelId: "AtomsAddress",
        description: "",
        fields: [
            {
                fieldId: "idAtomsAddress",
                id: "idAtomsAddress",
                label: "Atoms Address Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsAddressVariant",
                id: "atomsAddressVariant",
                label: "variant",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "default",
                            value: "default",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            }
        ],
        group: {
            id: "atoms",
            name: "Atoms"
        },
        layout: [["idAtomsAddress"], ["atomsAddressVariant"]],
        titleFieldId: "idAtomsAddress"
    }),
    new CmsModelPlugin({
        name: "Atoms Balance",
        modelId: "AtomsBalance",
        description: "",
        fields: [
            {
                fieldId: "idAtomsBalance",
                id: "idAtomsBalance",
                label: "Atoms Balance Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "atoms",
            name: "Atoms"
        },
        layout: [["idAtomsBalance"]],
        titleFieldId: "idAtomsBalance"
    }),
    new CmsModelPlugin({
        name: "Atoms Chip",
        modelId: "AtomsChip",
        description: "",
        fields: [
            {
                fieldId: "idAtomsChip",
                id: "idAtomsChip",
                label: "Atoms Chip Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsChipVariant",
                id: "atomsChipVariant",
                label: "variant",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            }
        ],
        group: {
            id: "atoms",
            name: "Atoms"
        },
        layout: [["idAtomsChip"], ["atomsChipVariant"]],
        titleFieldId: "idAtomsChip"
    }),
    new CmsModelPlugin({
        name: "Atoms Date Text",
        modelId: "AtomsDateText",
        description: "",
        fields: [
            {
                fieldId: "idAtomsDateText",
                id: "idAtomsDateText",
                label: "Atoms Date Text Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsDateTextTime",
                id: "atomsDateTextTime",
                label: "time",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsDateTextShowTimestamp",
                id: "atomsDateTextShowTimestamp",
                label: "showTimestamp",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsDateTextDatetimeFormat",
                id: "atomsDateTextDatetimeFormat",
                label: "datetimeFormat",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "atoms",
            name: "Atoms"
        },
        layout: [
            ["idAtomsDateText"],
            ["atomsDateTextTime"],
            ["atomsDateTextShowTimestamp"],
            ["atomsDateTextDatetimeFormat"]
        ],
        titleFieldId: "idAtomsDateText"
    }),
    new CmsModelPlugin({
        name: "Atoms Drop Down",
        modelId: "AtomsDropDown",
        description: "",
        fields: [
            {
                fieldId: "idAtomsDropDown",
                id: "idAtomsDropDown",
                label: "Atoms Drop Down Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsDropDownOptions",
                id: "atomsDropDownOptions",
                label: "options",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsDropDownSelectedIndex",
                id: "atomsDropDownSelectedIndex",
                label: "selectedIndex",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsDropDownDropUp",
                id: "atomsDropDownDropUp",
                label: "dropUp",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsDropDownDisabled",
                id: "atomsDropDownDisabled",
                label: "disabled",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            }
        ],
        group: {
            id: "atoms",
            name: "Atoms"
        },
        layout: [
            ["idAtomsDropDown"],
            ["atomsDropDownOptions"],
            ["atomsDropDownSelectedIndex"],
            ["atomsDropDownDropUp"],
            ["atomsDropDownDisabled"]
        ],
        titleFieldId: "idAtomsDropDown"
    }),
    new CmsModelPlugin({
        name: "Atoms Gauge",
        modelId: "AtomsGauge",
        description: "",
        fields: [
            {
                fieldId: "idAtomsGauge",
                id: "idAtomsGauge",
                label: "Atoms Gauge Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsGaugeMaxValue",
                id: "atomsGaugeMaxValue",
                label: "maxValue",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsGaugeMinValue",
                id: "atomsGaugeMinValue",
                label: "minValue",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsGaugeValue",
                id: "atomsGaugeValue",
                label: "value",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsGaugeWidth",
                id: "atomsGaugeWidth",
                label: "width",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsGaugeTooltip",
                id: "atomsGaugeTooltip",
                label: "tooltip",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            }
        ],
        group: {
            id: "atoms",
            name: "Atoms"
        },
        layout: [
            ["idAtomsGauge"],
            ["atomsGaugeMaxValue"],
            ["atomsGaugeMinValue"],
            ["atomsGaugeValue"],
            ["atomsGaugeWidth"],
            ["atomsGaugeTooltip"]
        ],
        titleFieldId: "idAtomsGauge"
    }),
    new CmsModelPlugin({
        name: "Atoms Icon",
        modelId: "AtomsIcon",
        description: "",
        fields: [
            {
                fieldId: "idAtomsIcon",
                id: "idAtomsIcon",
                label: "Atoms Icon Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsIconName",
                id: "atomsIconName",
                label: "name",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsIconSize",
                id: "atomsIconSize",
                label: "size",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "sm",
                            value: "sm",
                            selected: true
                        },
                        {
                            label: "lg",
                            value: "lg",
                            selected: false
                        },
                        {
                            label: "xl",
                            value: "xl",
                            selected: false
                        },
                        {
                            label: "xxl",
                            value: "xxl",
                            selected: false
                        },
                        {
                            label: "xxxl",
                            value: "xxxl",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "atomsIconVariant",
                id: "atomsIconVariant",
                label: "variant",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "atomsIconTooltip",
                id: "atomsIconTooltip",
                label: "tooltip",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsIconViewbox",
                id: "atomsIconViewbox",
                label: "viewbox",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsIconTooltipVisible",
                id: "atomsIconTooltipVisible",
                label: "tooltipVisible",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "sm",
                            value: "sm",
                            selected: true
                        },
                        {
                            label: "md",
                            value: "md",
                            selected: false
                        },
                        {
                            label: "lg",
                            value: "lg",
                            selected: false
                        },
                        {
                            label: "xl",
                            value: "xl",
                            selected: false
                        },
                        {
                            label: "xxl",
                            value: "xxl",
                            selected: false
                        }
                    ]
                }
            }
        ],
        group: {
            id: "atoms",
            name: "Atoms"
        },
        layout: [
            ["idAtomsIcon"],
            ["atomsIconName"],
            ["atomsIconSize"],
            ["atomsIconVariant"],
            ["atomsIconTooltip"],
            ["atomsIconViewbox"],
            ["atomsIconTooltipVisible"]
        ],
        titleFieldId: "idAtomsIcon"
    }),
    new CmsModelPlugin({
        name: "Atoms Loading Indicator",
        modelId: "AtomsLoadingIndicator",
        description: "",
        fields: [
            {
                fieldId: "idAtomsLoadingIndicator",
                id: "idAtomsLoadingIndicator",
                label: "Atoms Loading Indicator Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsLoadingIndicatorVariant",
                id: "atomsLoadingIndicatorVariant",
                label: "variant",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "atomsLoadingIndicatorDuration",
                id: "atomsLoadingIndicatorDuration",
                label: "duration",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "atoms",
            name: "Atoms"
        },
        layout: [
            ["idAtomsLoadingIndicator"],
            ["atomsLoadingIndicatorVariant"],
            ["atomsLoadingIndicatorDuration"]
        ],
        titleFieldId: "idAtomsLoadingIndicator"
    }),
    new CmsModelPlugin({
        name: "Atoms Logo",
        modelId: "AtomsLogo",
        description: "",
        fields: [
            {
                fieldId: "idAtomsLogo",
                id: "idAtomsLogo",
                label: "Atoms Logo Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "atoms",
            name: "Atoms"
        },
        layout: [["idAtomsLogo"]],
        titleFieldId: "idAtomsLogo"
    }),
    new CmsModelPlugin({
        name: "Atoms Progress Bar",
        modelId: "AtomsProgressBar",
        description: "",
        fields: [
            {
                fieldId: "idAtomsProgressBar",
                id: "idAtomsProgressBar",
                label: "Atoms Progress Bar Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsProgressBarVariant",
                id: "atomsProgressBarVariant",
                label: "variant",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "atomsProgressBarSteps",
                id: "atomsProgressBarSteps",
                label: "steps",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsProgressBarStep",
                id: "atomsProgressBarStep",
                label: "step",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "atoms",
            name: "Atoms"
        },
        layout: [
            ["idAtomsProgressBar"],
            ["atomsProgressBarVariant"],
            ["atomsProgressBarSteps"],
            ["atomsProgressBarStep"]
        ],
        titleFieldId: "idAtomsProgressBar"
    }),
    new CmsModelPlugin({
        name: "Atoms Qr Code",
        modelId: "AtomsQrCode",
        description: "",
        fields: [
            {
                fieldId: "idAtomsQrCode",
                id: "idAtomsQrCode",
                label: "Atoms Qr Code Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsQrCodeValue",
                id: "atomsQrCodeValue",
                label: "value",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsQrCodeWidth",
                id: "atomsQrCodeWidth",
                label: "width",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsQrCodeQrColor",
                id: "atomsQrCodeQrColor",
                label: "qrColor",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsQrCodeBgColor",
                id: "atomsQrCodeBgColor",
                label: "bgColor",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsQrCodeAlign",
                id: "atomsQrCodeAlign",
                label: "align",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "atoms",
            name: "Atoms"
        },
        layout: [
            ["idAtomsQrCode"],
            ["atomsQrCodeValue"],
            ["atomsQrCodeWidth"],
            ["atomsQrCodeQrColor"],
            ["atomsQrCodeBgColor"],
            ["atomsQrCodeAlign"]
        ],
        titleFieldId: "idAtomsQrCode"
    }),
    new CmsModelPlugin({
        name: "Atoms Rich Text",
        modelId: "AtomsRichText",
        description: "",
        fields: [
            {
                fieldId: "idAtomsRichText",
                id: "idAtomsRichText",
                label: "Atoms Rich Text Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsRichTextMarkdown",
                id: "atomsRichTextMarkdown",
                label: "markdown",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsRichTextSize",
                id: "atomsRichTextSize",
                label: "size",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "lg",
                            value: "lg",
                            selected: true
                        },
                        {
                            label: "xl",
                            value: "xl",
                            selected: false
                        },
                        {
                            label: "xxl",
                            value: "xxl",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "atomsRichTextAlign",
                id: "atomsRichTextAlign",
                label: "align",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "center",
                            value: "center",
                            selected: true
                        },
                        {
                            label: "right",
                            value: "right",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "atomsRichTextChildren",
                id: "atomsRichTextChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "OrganismsAccordion"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "atoms",
            name: "Atoms"
        },
        layout: [
            ["idAtomsRichText"],
            ["atomsRichTextMarkdown"],
            ["atomsRichTextSize"],
            ["atomsRichTextAlign"],
            ["atomsRichTextChildren"]
        ],
        titleFieldId: "idAtomsRichText"
    }),
    new CmsModelPlugin({
        name: "Atoms Skeleton Loader",
        modelId: "AtomsSkeletonLoader",
        description: "",
        fields: [
            {
                fieldId: "idAtomsSkeletonLoader",
                id: "idAtomsSkeletonLoader",
                label: "Atoms Skeleton Loader Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsSkeletonLoaderVariant",
                id: "atomsSkeletonLoaderVariant",
                label: "variant",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "default",
                            value: "default",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "atomsSkeletonLoaderExtraSmallScreenHeight",
                id: "atomsSkeletonLoaderExtraSmallScreenHeight",
                label: "extraSmallScreenHeight",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsSkeletonLoaderSmallScreenHeight",
                id: "atomsSkeletonLoaderSmallScreenHeight",
                label: "smallScreenHeight",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsSkeletonLoaderMediumScreenHeight",
                id: "atomsSkeletonLoaderMediumScreenHeight",
                label: "mediumScreenHeight",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsSkeletonLoaderLargeScreenHeight",
                id: "atomsSkeletonLoaderLargeScreenHeight",
                label: "largeScreenHeight",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsSkeletonLoaderExtraLargeScreenHeight",
                id: "atomsSkeletonLoaderExtraLargeScreenHeight",
                label: "extraLargeScreenHeight",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsSkeletonLoaderJumboScreenHeight",
                id: "atomsSkeletonLoaderJumboScreenHeight",
                label: "jumboScreenHeight",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsSkeletonLoaderWidth",
                id: "atomsSkeletonLoaderWidth",
                label: "width",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsSkeletonLoaderPulse",
                id: "atomsSkeletonLoaderPulse",
                label: "pulse",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsSkeletonLoaderRounded",
                id: "atomsSkeletonLoaderRounded",
                label: "rounded",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            }
        ],
        group: {
            id: "atoms",
            name: "Atoms"
        },
        layout: [
            ["idAtomsSkeletonLoader"],
            ["atomsSkeletonLoaderVariant"],
            ["atomsSkeletonLoaderExtraSmallScreenHeight"],
            ["atomsSkeletonLoaderSmallScreenHeight"],
            ["atomsSkeletonLoaderMediumScreenHeight"],
            ["atomsSkeletonLoaderLargeScreenHeight"],
            ["atomsSkeletonLoaderExtraLargeScreenHeight"],
            ["atomsSkeletonLoaderJumboScreenHeight"],
            ["atomsSkeletonLoaderWidth"],
            ["atomsSkeletonLoaderPulse"],
            ["atomsSkeletonLoaderRounded"]
        ],
        titleFieldId: "idAtomsSkeletonLoader"
    }),
    new CmsModelPlugin({
        name: "Atoms Slider",
        modelId: "AtomsSlider",
        description: "",
        fields: [
            {
                fieldId: "idAtomsSlider",
                id: "idAtomsSlider",
                label: "Atoms Slider Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsSliderMin",
                id: "atomsSliderMin",
                label: "min",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsSliderMax",
                id: "atomsSliderMax",
                label: "max",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsSliderValue",
                id: "atomsSliderValue",
                label: "value",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsSliderId",
                id: "atomsSliderId",
                label: "id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "atoms",
            name: "Atoms"
        },
        layout: [
            ["idAtomsSlider"],
            ["atomsSliderMin"],
            ["atomsSliderMax"],
            ["atomsSliderValue"],
            ["atomsSliderId"]
        ],
        titleFieldId: "idAtomsSlider"
    }),
    new CmsModelPlugin({
        name: "Atoms Text Field",
        modelId: "AtomsTextField",
        description: "",
        fields: [
            {
                fieldId: "idAtomsTextField",
                id: "idAtomsTextField",
                label: "Atoms Text Field Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsTextFieldValue",
                id: "atomsTextFieldValue",
                label: "value",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsTextFieldDisabled",
                id: "atomsTextFieldDisabled",
                label: "disabled",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsTextFieldMultiline",
                id: "atomsTextFieldMultiline",
                label: "multiline",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsTextFieldPlaceholder",
                id: "atomsTextFieldPlaceholder",
                label: "placeholder",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsTextFieldState",
                id: "atomsTextFieldState",
                label: "state",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "warning",
                            value: "warning",
                            selected: true
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "atomsTextFieldId",
                id: "atomsTextFieldId",
                label: "id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsTextFieldName",
                id: "atomsTextFieldName",
                label: "name",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsTextFieldFocused",
                id: "atomsTextFieldFocused",
                label: "focused",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            }
        ],
        group: {
            id: "atoms",
            name: "Atoms"
        },
        layout: [
            ["idAtomsTextField"],
            ["atomsTextFieldValue"],
            ["atomsTextFieldDisabled"],
            ["atomsTextFieldMultiline"],
            ["atomsTextFieldPlaceholder"],
            ["atomsTextFieldState"],
            ["atomsTextFieldId"],
            ["atomsTextFieldName"],
            ["atomsTextFieldFocused"]
        ],
        titleFieldId: "idAtomsTextField"
    }),
    new CmsModelPlugin({
        name: "Atoms Toggle",
        modelId: "AtomsToggle",
        description: "",
        fields: [
            {
                fieldId: "idAtomsToggle",
                id: "idAtomsToggle",
                label: "Atoms Toggle Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsToggleVariant",
                id: "atomsToggleVariant",
                label: "variant",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "atomsToggleType",
                id: "atomsToggleType",
                label: "type",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "radio",
                            value: "radio",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "atomsToggleName",
                id: "atomsToggleName",
                label: "name",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsToggleChecked",
                id: "atomsToggleChecked",
                label: "checked",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsToggleId",
                id: "atomsToggleId",
                label: "id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsToggleValue",
                id: "atomsToggleValue",
                label: "value",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsToggleGroup",
                id: "atomsToggleGroup",
                label: "group",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsToggleDisabled",
                id: "atomsToggleDisabled",
                label: "disabled",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsToggleSelected",
                id: "atomsToggleSelected",
                label: "selected",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsToggleOnIcon",
                id: "atomsToggleOnIcon",
                label: "onIcon",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsToggleOffIcon",
                id: "atomsToggleOffIcon",
                label: "offIcon",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "atoms",
            name: "Atoms"
        },
        layout: [
            ["idAtomsToggle"],
            ["atomsToggleVariant"],
            ["atomsToggleType"],
            ["atomsToggleName"],
            ["atomsToggleChecked"],
            ["atomsToggleId"],
            ["atomsToggleValue"],
            ["atomsToggleGroup"],
            ["atomsToggleDisabled"],
            ["atomsToggleSelected"],
            ["atomsToggleOnIcon"],
            ["atomsToggleOffIcon"]
        ],
        titleFieldId: "idAtomsToggle"
    }),
    new CmsModelPlugin({
        name: "Atoms Truncate Text",
        modelId: "AtomsTruncateText",
        description: "",
        fields: [
            {
                fieldId: "idAtomsTruncateText",
                id: "idAtomsTruncateText",
                label: "Atoms Truncate Text Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsTruncateTextWidth",
                id: "atomsTruncateTextWidth",
                label: "width",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "half",
                            value: "half",
                            selected: true
                        },
                        {
                            label: "quarter",
                            value: "quarter",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "atomsTruncateTextTitle",
                id: "atomsTruncateTextTitle",
                label: "title",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsTruncateTextText",
                id: "atomsTruncateTextText",
                label: "text",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "atoms",
            name: "Atoms"
        },
        layout: [
            ["idAtomsTruncateText"],
            ["atomsTruncateTextWidth"],
            ["atomsTruncateTextTitle"],
            ["atomsTruncateTextText"]
        ],
        titleFieldId: "idAtomsTruncateText"
    }),
    new CmsGroupPlugin({
        id: "molecules",
        name: "Molecules",
        slug: "molecules",
        icon: "fas/id-card-alt",
        description: ""
    }),
    new CmsModelPlugin({
        name: "Molecules Alert",
        modelId: "MoleculesAlert",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesAlert",
                id: "idMoleculesAlert",
                label: "Molecules Alert Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesAlertValue",
                id: "moleculesAlertValue",
                label: "value",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesAlertId",
                id: "moleculesAlertId",
                label: "id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesAlertDismissable",
                id: "moleculesAlertDismissable",
                label: "dismissable",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesAlertVariant",
                id: "moleculesAlertVariant",
                label: "variant",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "warning",
                            value: "warning",
                            selected: true
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesAlertModal",
                id: "moleculesAlertModal",
                label: "modal",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesAlertChildren",
                id: "moleculesAlertChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "AtomsIcon"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [
            ["idMoleculesAlert"],
            ["moleculesAlertValue"],
            ["moleculesAlertId"],
            ["moleculesAlertDismissable"],
            ["moleculesAlertVariant"],
            ["moleculesAlertModal"],
            ["moleculesAlertChildren"]
        ],
        titleFieldId: "idMoleculesAlert"
    }),
    new CmsModelPlugin({
        name: "Molecules Breadcrumb",
        modelId: "MoleculesBreadcrumb",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesBreadcrumb",
                id: "idMoleculesBreadcrumb",
                label: "Molecules Breadcrumb Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesBreadcrumbHref",
                id: "moleculesBreadcrumbHref",
                label: "href",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [["idMoleculesBreadcrumb"], ["moleculesBreadcrumbHref"]],
        titleFieldId: "idMoleculesBreadcrumb"
    }),
    new CmsModelPlugin({
        name: "Molecules Button",
        modelId: "MoleculesButton",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesButton",
                id: "idMoleculesButton",
                label: "Molecules Button Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesButtonId",
                id: "moleculesButtonId",
                label: "id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesButtonValue",
                id: "moleculesButtonValue",
                label: "value",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesButtonVariant",
                id: "moleculesButtonVariant",
                label: "variant",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesButtonSize",
                id: "moleculesButtonSize",
                label: "size",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "lg",
                            value: "lg",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesButtonOutline",
                id: "moleculesButtonOutline",
                label: "outline",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesButtonCircle",
                id: "moleculesButtonCircle",
                label: "circle",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesButtonBlock",
                id: "moleculesButtonBlock",
                label: "block",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesButtonHref",
                id: "moleculesButtonHref",
                label: "href",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesButtonActive",
                id: "moleculesButtonActive",
                label: "active",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesButtonDisabled",
                id: "moleculesButtonDisabled",
                label: "disabled",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesButtonLabel",
                id: "moleculesButtonLabel",
                label: "label",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesButtonChildren",
                id: "moleculesButtonChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "AtomsIcon"
                        },
                        {
                            modelId: "MoleculesLabel"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [
            ["idMoleculesButton"],
            ["moleculesButtonId"],
            ["moleculesButtonValue"],
            ["moleculesButtonVariant"],
            ["moleculesButtonSize"],
            ["moleculesButtonOutline"],
            ["moleculesButtonCircle"],
            ["moleculesButtonBlock"],
            ["moleculesButtonHref"],
            ["moleculesButtonActive"],
            ["moleculesButtonDisabled"],
            ["moleculesButtonLabel"],
            ["moleculesButtonChildren"]
        ],
        titleFieldId: "idMoleculesButton"
    }),
    new CmsModelPlugin({
        name: "Molecules Chart",
        modelId: "MoleculesChart",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesChart",
                id: "idMoleculesChart",
                label: "Molecules Chart Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesChartType",
                id: "moleculesChartType",
                label: "type",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesChartData",
                id: "moleculesChartData",
                label: "data",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesChartAspectRatio",
                id: "moleculesChartAspectRatio",
                label: "aspectRatio",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [
            ["idMoleculesChart"],
            ["moleculesChartType"],
            ["moleculesChartData"],
            ["moleculesChartAspectRatio"]
        ],
        titleFieldId: "idMoleculesChart"
    }),
    new CmsModelPlugin({
        name: "Molecules Content",
        modelId: "MoleculesContent",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesContent",
                id: "idMoleculesContent",
                label: "Molecules Content Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesContentChildren",
                id: "moleculesContentChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "AtomsAddress"
                        },
                        {
                            modelId: "AtomsQrCode"
                        },
                        {
                            modelId: "AtomsRichText"
                        },
                        {
                            modelId: "MoleculesDetailList"
                        },
                        {
                            modelId: "MoleculesDisclaimerList"
                        },
                        {
                            modelId: "MoleculesGroup"
                        },
                        {
                            modelId: "MoleculesHeading"
                        },
                        {
                            modelId: "OrganismsForm"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [["idMoleculesContent"], ["moleculesContentChildren"]],
        titleFieldId: "idMoleculesContent"
    }),
    new CmsModelPlugin({
        name: "Molecules Control",
        modelId: "MoleculesControl",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesControl",
                id: "idMoleculesControl",
                label: "Molecules Control Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesControlType",
                id: "moleculesControlType",
                label: "type",
                type: "text",
                renderer: {
                    name: "text-inputs"
                },
                multipleValues: false,
                predefinedValues: {
                    enabled: true,
                    values: []
                }
            },
            {
                fieldId: "moleculesControlState",
                id: "moleculesControlState",
                label: "state",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "warning",
                            value: "warning",
                            selected: true
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesControlId",
                id: "moleculesControlId",
                label: "id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesControlLabel",
                id: "moleculesControlLabel",
                label: "label",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesControlMessage",
                id: "moleculesControlMessage",
                label: "message",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesControlWidth",
                id: "moleculesControlWidth",
                label: "width",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "half",
                            value: "half",
                            selected: true
                        },
                        {
                            label: "quarter",
                            value: "quarter",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesControlName",
                id: "moleculesControlName",
                label: "name",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesControlGroup",
                id: "moleculesControlGroup",
                label: "group",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesControlChildren",
                id: "moleculesControlChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "AtomsDropDown"
                        },
                        {
                            modelId: "AtomsIcon"
                        },
                        {
                            modelId: "AtomsTextField"
                        },
                        {
                            modelId: "AtomsToggle"
                        },
                        {
                            modelId: "MoleculesFileUpload"
                        },
                        {
                            modelId: "MoleculesPasswordStrength"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [
            ["idMoleculesControl"],
            ["moleculesControlType"],
            ["moleculesControlState"],
            ["moleculesControlId"],
            ["moleculesControlLabel"],
            ["moleculesControlMessage"],
            ["moleculesControlWidth"],
            ["moleculesControlName"],
            ["moleculesControlGroup"],
            ["moleculesControlChildren"]
        ],
        titleFieldId: "idMoleculesControl"
    }),
    new CmsModelPlugin({
        name: "Molecules Cta List",
        modelId: "MoleculesCtaList",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesCtaList",
                id: "idMoleculesCtaList",
                label: "Molecules Cta List Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesCtaListVariant",
                id: "moleculesCtaListVariant",
                label: "variant",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesCtaListType",
                id: "moleculesCtaListType",
                label: "type",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "unordered",
                            value: "unordered",
                            selected: true
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [["idMoleculesCtaList"], ["moleculesCtaListVariant"], ["moleculesCtaListType"]],
        titleFieldId: "idMoleculesCtaList"
    }),
    new CmsModelPlugin({
        name: "Molecules Detail List",
        modelId: "MoleculesDetailList",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesDetailList",
                id: "idMoleculesDetailList",
                label: "Molecules Detail List Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesDetailListSplit",
                id: "moleculesDetailListSplit",
                label: "split",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesDetailListChildren",
                id: "moleculesDetailListChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "AtomsChip"
                        },
                        {
                            modelId: "AtomsIcon"
                        },
                        {
                            modelId: "AtomsRichText"
                        },
                        {
                            modelId: "MoleculesGroup"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [
            ["idMoleculesDetailList"],
            ["moleculesDetailListSplit"],
            ["moleculesDetailListChildren"]
        ],
        titleFieldId: "idMoleculesDetailList"
    }),
    new CmsModelPlugin({
        name: "Molecules Disclaimer List",
        modelId: "MoleculesDisclaimerList",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesDisclaimerList",
                id: "idMoleculesDisclaimerList",
                label: "Molecules Disclaimer List Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesDisclaimerListChildren",
                id: "moleculesDisclaimerListChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "MoleculesHeading"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [["idMoleculesDisclaimerList"], ["moleculesDisclaimerListChildren"]],
        titleFieldId: "idMoleculesDisclaimerList"
    }),
    new CmsModelPlugin({
        name: "Molecules File Upload",
        modelId: "MoleculesFileUpload",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesFileUpload",
                id: "idMoleculesFileUpload",
                label: "Molecules File Upload Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesFileUploadId",
                id: "moleculesFileUploadId",
                label: "id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesFileUploadName",
                id: "moleculesFileUploadName",
                label: "name",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesFileUploadUploaded",
                id: "moleculesFileUploadUploaded",
                label: "uploaded",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [
            ["idMoleculesFileUpload"],
            ["moleculesFileUploadId"],
            ["moleculesFileUploadName"],
            ["moleculesFileUploadUploaded"]
        ],
        titleFieldId: "idMoleculesFileUpload"
    }),
    new CmsModelPlugin({
        name: "Molecules Group",
        modelId: "MoleculesGroup",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesGroup",
                id: "idMoleculesGroup",
                label: "Molecules Group Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesGroupAlign",
                id: "moleculesGroupAlign",
                label: "align",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "center",
                            value: "center",
                            selected: true
                        },
                        {
                            label: "right",
                            value: "right",
                            selected: false
                        },
                        {
                            label: "around",
                            value: "around",
                            selected: false
                        },
                        {
                            label: "between",
                            value: "between",
                            selected: false
                        },
                        {
                            label: "evenly",
                            value: "evenly",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesGroupGrid",
                id: "moleculesGroupGrid",
                label: "grid",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesGroupChildren",
                id: "moleculesGroupChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "AtomsIcon"
                        },
                        {
                            modelId: "MoleculesButton"
                        },
                        {
                            modelId: "OrganismsCard"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [
            ["idMoleculesGroup"],
            ["moleculesGroupAlign"],
            ["moleculesGroupGrid"],
            ["moleculesGroupChildren"]
        ],
        titleFieldId: "idMoleculesGroup"
    }),
    new CmsModelPlugin({
        name: "Molecules Heading",
        modelId: "MoleculesHeading",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesHeading",
                id: "idMoleculesHeading",
                label: "Molecules Heading Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesHeadingSize",
                id: "moleculesHeadingSize",
                label: "size",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "lg",
                            value: "lg",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesHeadingVariant",
                id: "moleculesHeadingVariant",
                label: "variant",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "warning",
                            value: "warning",
                            selected: true
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesHeadingAlign",
                id: "moleculesHeadingAlign",
                label: "align",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "center",
                            value: "center",
                            selected: true
                        },
                        {
                            label: "right",
                            value: "right",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesHeadingChildren",
                id: "moleculesHeadingChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "AtomsIcon"
                        },
                        {
                            modelId: "AtomsLoadingIndicator"
                        },
                        {
                            modelId: "MoleculesButton"
                        },
                        {
                            modelId: "MoleculesGroup"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [
            ["idMoleculesHeading"],
            ["moleculesHeadingSize"],
            ["moleculesHeadingVariant"],
            ["moleculesHeadingAlign"],
            ["moleculesHeadingChildren"]
        ],
        titleFieldId: "idMoleculesHeading"
    }),
    new CmsModelPlugin({
        name: "Molecules Item",
        modelId: "MoleculesItem",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesItem",
                id: "idMoleculesItem",
                label: "Molecules Item Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesItemIconName",
                id: "moleculesItemIconName",
                label: "iconName",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesItemIconViewbox",
                id: "moleculesItemIconViewbox",
                label: "iconViewbox",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [["idMoleculesItem"], ["moleculesItemIconName"], ["moleculesItemIconViewbox"]],
        titleFieldId: "idMoleculesItem"
    }),
    new CmsModelPlugin({
        name: "Molecules Label",
        modelId: "MoleculesLabel",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesLabel",
                id: "idMoleculesLabel",
                label: "Molecules Label Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [["idMoleculesLabel"]],
        titleFieldId: "idMoleculesLabel"
    }),
    new CmsModelPlugin({
        name: "Molecules Media Content",
        modelId: "MoleculesMediaContent",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesMediaContent",
                id: "idMoleculesMediaContent",
                label: "Molecules Media Content Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesMediaContentReverse",
                id: "moleculesMediaContentReverse",
                label: "reverse",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesMediaContentAlign",
                id: "moleculesMediaContentAlign",
                label: "align",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "center",
                            value: "center",
                            selected: true
                        },
                        {
                            label: "right",
                            value: "right",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesMediaContentValign",
                id: "moleculesMediaContentValign",
                label: "valign",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "middle",
                            value: "middle",
                            selected: true
                        },
                        {
                            label: "bottom",
                            value: "bottom",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesMediaContentChildren",
                id: "moleculesMediaContentChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "AtomsRichText"
                        },
                        {
                            modelId: "MoleculesDetailList"
                        },
                        {
                            modelId: "MoleculesGroup"
                        },
                        {
                            modelId: "MoleculesHeading"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [
            ["idMoleculesMediaContent"],
            ["moleculesMediaContentReverse"],
            ["moleculesMediaContentAlign"],
            ["moleculesMediaContentValign"],
            ["moleculesMediaContentChildren"]
        ],
        titleFieldId: "idMoleculesMediaContent"
    }),
    new CmsModelPlugin({
        name: "Molecules Menu",
        modelId: "MoleculesMenu",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesMenu",
                id: "idMoleculesMenu",
                label: "Molecules Menu Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesMenuOrientation",
                id: "moleculesMenuOrientation",
                label: "orientation",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "vertical",
                            value: "vertical",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesMenuId",
                id: "moleculesMenuId",
                label: "id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesMenuName",
                id: "moleculesMenuName",
                label: "name",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesMenuChildren",
                id: "moleculesMenuChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "AtomsDropDown"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [
            ["idMoleculesMenu"],
            ["moleculesMenuOrientation"],
            ["moleculesMenuId"],
            ["moleculesMenuName"],
            ["moleculesMenuChildren"]
        ],
        titleFieldId: "idMoleculesMenu"
    }),
    new CmsModelPlugin({
        name: "Molecules Mnemonic",
        modelId: "MoleculesMnemonic",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesMnemonic",
                id: "idMoleculesMnemonic",
                label: "Molecules Mnemonic Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesMnemonicSeed",
                id: "moleculesMnemonicSeed",
                label: "seed",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesMnemonicType",
                id: "moleculesMnemonicType",
                label: "type",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "preview",
                            value: "preview",
                            selected: true
                        },
                        {
                            label: "confirm",
                            value: "confirm",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesMnemonicLength",
                id: "moleculesMnemonicLength",
                label: "length",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "moleculesMnemonicDisabled",
                id: "moleculesMnemonicDisabled",
                label: "disabled",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesMnemonicChildren",
                id: "moleculesMnemonicChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "AtomsTextField"
                        },
                        {
                            modelId: "MoleculesButton"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [
            ["idMoleculesMnemonic"],
            ["moleculesMnemonicSeed"],
            ["moleculesMnemonicType"],
            ["moleculesMnemonicLength"],
            ["moleculesMnemonicDisabled"],
            ["moleculesMnemonicChildren"]
        ],
        titleFieldId: "idMoleculesMnemonic"
    }),
    new CmsModelPlugin({
        name: "Molecules Pagination",
        modelId: "MoleculesPagination",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesPagination",
                id: "idMoleculesPagination",
                label: "Molecules Pagination Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesPaginationRef",
                id: "moleculesPaginationRef",
                label: "ref",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesPaginationItems",
                id: "moleculesPaginationItems",
                label: "items",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesPaginationItemsPerPage",
                id: "moleculesPaginationItemsPerPage",
                label: "itemsPerPage",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "moleculesPaginationPageNumber",
                id: "moleculesPaginationPageNumber",
                label: "pageNumber",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "moleculesPaginationChildren",
                id: "moleculesPaginationChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "MoleculesMenu"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [
            ["idMoleculesPagination"],
            ["moleculesPaginationRef"],
            ["moleculesPaginationItems"],
            ["moleculesPaginationItemsPerPage"],
            ["moleculesPaginationPageNumber"],
            ["moleculesPaginationChildren"]
        ],
        titleFieldId: "idMoleculesPagination"
    }),
    new CmsModelPlugin({
        name: "Molecules Password Strength",
        modelId: "MoleculesPasswordStrength",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesPasswordStrength",
                id: "idMoleculesPasswordStrength",
                label: "Molecules Password Strength Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesPasswordStrengthPassword",
                id: "moleculesPasswordStrengthPassword",
                label: "password",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesPasswordStrengthChildren",
                id: "moleculesPasswordStrengthChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "AtomsProgressBar"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [
            ["idMoleculesPasswordStrength"],
            ["moleculesPasswordStrengthPassword"],
            ["moleculesPasswordStrengthChildren"]
        ],
        titleFieldId: "idMoleculesPasswordStrength"
    }),
    new CmsModelPlugin({
        name: "Molecules Statistic",
        modelId: "MoleculesStatistic",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesStatistic",
                id: "idMoleculesStatistic",
                label: "Molecules Statistic Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesStatisticTitle",
                id: "moleculesStatisticTitle",
                label: "title",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesStatisticChildren",
                id: "moleculesStatisticChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "AtomsChip"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [
            ["idMoleculesStatistic"],
            ["moleculesStatisticTitle"],
            ["moleculesStatisticChildren"]
        ],
        titleFieldId: "idMoleculesStatistic"
    }),
    new CmsModelPlugin({
        name: "Molecules Step List",
        modelId: "MoleculesStepList",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesStepList",
                id: "idMoleculesStepList",
                label: "Molecules Step List Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesStepListVariant",
                id: "moleculesStepListVariant",
                label: "variant",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [["idMoleculesStepList"], ["moleculesStepListVariant"]],
        titleFieldId: "idMoleculesStepList"
    }),
    new CmsModelPlugin({
        name: "Molecules Word",
        modelId: "MoleculesWord",
        description: "",
        fields: [
            {
                fieldId: "idMoleculesWord",
                id: "idMoleculesWord",
                label: "Molecules Word Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesWordValue",
                id: "moleculesWordValue",
                label: "value",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesWordIndex",
                id: "moleculesWordIndex",
                label: "index",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesWordDisabled",
                id: "moleculesWordDisabled",
                label: "disabled",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesWordId",
                id: "moleculesWordId",
                label: "id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [
            ["idMoleculesWord"],
            ["moleculesWordValue"],
            ["moleculesWordIndex"],
            ["moleculesWordDisabled"],
            ["moleculesWordId"]
        ],
        titleFieldId: "idMoleculesWord"
    }),
    new CmsGroupPlugin({
        id: "organisms",
        name: "Organisms",
        slug: "organisms",
        icon: "fas/id-card-alt",
        description: ""
    }),
    new CmsModelPlugin({
        name: "Organisms Accordion",
        modelId: "OrganismsAccordion",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsAccordion",
                id: "idOrganismsAccordion",
                label: "Organisms Accordion Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsAccordionMultiselect",
                id: "organismsAccordionMultiselect",
                label: "multiselect",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsAccordionChildren",
                id: "organismsAccordionChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "MoleculesButton"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [
            ["idOrganismsAccordion"],
            ["organismsAccordionMultiselect"],
            ["organismsAccordionChildren"]
        ],
        titleFieldId: "idOrganismsAccordion"
    }),
    new CmsModelPlugin({
        name: "Organisms Actions",
        modelId: "OrganismsActions",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsActions",
                id: "idOrganismsActions",
                label: "Organisms Actions Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [["idOrganismsActions"]],
        titleFieldId: "idOrganismsActions"
    }),
    new CmsModelPlugin({
        name: "Organisms Apps Menu",
        modelId: "OrganismsAppsMenu",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsAppsMenu",
                id: "idOrganismsAppsMenu",
                label: "Organisms Apps Menu Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsAppsMenuApps",
                id: "organismsAppsMenuApps",
                label: "apps",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsAppsMenuAppName",
                id: "organismsAppsMenuAppName",
                label: "appName",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [["idOrganismsAppsMenu"], ["organismsAppsMenuApps"], ["organismsAppsMenuAppName"]],
        titleFieldId: "idOrganismsAppsMenu"
    }),
    new CmsModelPlugin({
        name: "Organisms Card",
        modelId: "OrganismsCard",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsCard",
                id: "idOrganismsCard",
                label: "Organisms Card Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsCardVariant",
                id: "organismsCardVariant",
                label: "variant",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "organismsCardState",
                id: "organismsCardState",
                label: "state",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "error",
                            value: "error",
                            selected: true
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "organismsCardHref",
                id: "organismsCardHref",
                label: "href",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsCardDisabled",
                id: "organismsCardDisabled",
                label: "disabled",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsCardOverflow",
                id: "organismsCardOverflow",
                label: "overflow",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsCardChildren",
                id: "organismsCardChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "AtomsRichText"
                        },
                        {
                            modelId: "MoleculesBreadcrumb"
                        },
                        {
                            modelId: "MoleculesContent"
                        },
                        {
                            modelId: "MoleculesDetailList"
                        },
                        {
                            modelId: "MoleculesDisclaimerList"
                        },
                        {
                            modelId: "MoleculesHeading"
                        },
                        {
                            modelId: "MoleculesMediaContent"
                        },
                        {
                            modelId: "MoleculesMnemonic"
                        },
                        {
                            modelId: "OrganismsAccordion"
                        },
                        {
                            modelId: "OrganismsWizard"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [
            ["idOrganismsCard"],
            ["organismsCardVariant"],
            ["organismsCardState"],
            ["organismsCardHref"],
            ["organismsCardDisabled"],
            ["organismsCardOverflow"],
            ["organismsCardChildren"]
        ],
        titleFieldId: "idOrganismsCard"
    }),
    new CmsModelPlugin({
        name: "Organisms Category Menu",
        modelId: "OrganismsCategoryMenu",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsCategoryMenu",
                id: "idOrganismsCategoryMenu",
                label: "Organisms Category Menu Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsCategoryMenuCategory",
                id: "organismsCategoryMenuCategory",
                label: "category",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [["idOrganismsCategoryMenu"], ["organismsCategoryMenuCategory"]],
        titleFieldId: "idOrganismsCategoryMenu"
    }),
    new CmsModelPlugin({
        name: "Organisms Cookie Banner",
        modelId: "OrganismsCookieBanner",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsCookieBanner",
                id: "idOrganismsCookieBanner",
                label: "Organisms Cookie Banner Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsCookieBannerId",
                id: "organismsCookieBannerId",
                label: "id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsCookieBannerCookieName",
                id: "organismsCookieBannerCookieName",
                label: "cookieName",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsCookieBannerDarkModeCookieName",
                id: "organismsCookieBannerDarkModeCookieName",
                label: "darkModeCookieName",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsCookieBannerCookieConfig",
                id: "organismsCookieBannerCookieConfig",
                label: "cookieConfig",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsCookieBannerAcceptLabel",
                id: "organismsCookieBannerAcceptLabel",
                label: "acceptLabel",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsCookieBannerSettingsLabel",
                id: "organismsCookieBannerSettingsLabel",
                label: "settingsLabel",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsCookieBannerShowBanner",
                id: "organismsCookieBannerShowBanner",
                label: "showBanner",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsCookieBannerShowSettings",
                id: "organismsCookieBannerShowSettings",
                label: "showSettings",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsCookieBannerCloseScrim",
                id: "organismsCookieBannerCloseScrim",
                label: "closeScrim",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [
            ["idOrganismsCookieBanner"],
            ["organismsCookieBannerId"],
            ["organismsCookieBannerCookieName"],
            ["organismsCookieBannerDarkModeCookieName"],
            ["organismsCookieBannerCookieConfig"],
            ["organismsCookieBannerAcceptLabel"],
            ["organismsCookieBannerSettingsLabel"],
            ["organismsCookieBannerShowBanner"],
            ["organismsCookieBannerShowSettings"],
            ["organismsCookieBannerCloseScrim"]
        ],
        titleFieldId: "idOrganismsCookieBanner"
    }),
    new CmsModelPlugin({
        name: "Organisms Datum",
        modelId: "OrganismsDatum",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsDatum",
                id: "idOrganismsDatum",
                label: "Organisms Datum Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsDatumVariant",
                id: "organismsDatumVariant",
                label: "variant",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsDatumDataKey",
                id: "organismsDatumDataKey",
                label: "dataKey",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsDatumHidden",
                id: "organismsDatumHidden",
                label: "hidden",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsDatumColspan",
                id: "organismsDatumColspan",
                label: "colspan",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsDatumId",
                id: "organismsDatumId",
                label: "id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsDatumChildren",
                id: "organismsDatumChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "AtomsChip"
                        },
                        {
                            modelId: "AtomsLoadingIndicator"
                        },
                        {
                            modelId: "AtomsTruncateText"
                        },
                        {
                            modelId: "MoleculesHeading"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [
            ["idOrganismsDatum"],
            ["organismsDatumVariant"],
            ["organismsDatumDataKey"],
            ["organismsDatumHidden"],
            ["organismsDatumColspan"],
            ["organismsDatumId"],
            ["organismsDatumChildren"]
        ],
        titleFieldId: "idOrganismsDatum"
    }),
    new CmsModelPlugin({
        name: "Organisms Error Block",
        modelId: "OrganismsErrorBlock",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsErrorBlock",
                id: "idOrganismsErrorBlock",
                label: "Organisms Error Block Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsErrorBlockCode",
                id: "organismsErrorBlockCode",
                label: "code",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "organismsErrorBlockMessage",
                id: "organismsErrorBlockMessage",
                label: "message",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsErrorBlockStack",
                id: "organismsErrorBlockStack",
                label: "stack",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsErrorBlockDev",
                id: "organismsErrorBlockDev",
                label: "dev",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [
            ["idOrganismsErrorBlock"],
            ["organismsErrorBlockCode"],
            ["organismsErrorBlockMessage"],
            ["organismsErrorBlockStack"],
            ["organismsErrorBlockDev"]
        ],
        titleFieldId: "idOrganismsErrorBlock"
    }),
    new CmsModelPlugin({
        name: "Organisms Footer",
        modelId: "OrganismsFooter",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsFooter",
                id: "idOrganismsFooter",
                label: "Organisms Footer Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsFooterType",
                id: "organismsFooterType",
                label: "type",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "minimal",
                            value: "minimal",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "organismsFooterSocial",
                id: "organismsFooterSocial",
                label: "social",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsFooterCategories",
                id: "organismsFooterCategories",
                label: "categories",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsFooterChildren",
                id: "organismsFooterChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "AtomsIcon"
                        },
                        {
                            modelId: "AtomsLogo"
                        },
                        {
                            modelId: "MoleculesMenu"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [
            ["idOrganismsFooter"],
            ["organismsFooterType"],
            ["organismsFooterSocial"],
            ["organismsFooterCategories"],
            ["organismsFooterChildren"]
        ],
        titleFieldId: "idOrganismsFooter"
    }),
    new CmsModelPlugin({
        name: "Organisms Form",
        modelId: "OrganismsForm",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsForm",
                id: "idOrganismsForm",
                label: "Organisms Form Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsFormSubmitHandler",
                id: "organismsFormSubmitHandler",
                label: "submitHandler",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsFormSchema",
                id: "organismsFormSchema",
                label: "schema",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsFormFields",
                id: "organismsFormFields",
                label: "fields",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsFormSubmitted",
                id: "organismsFormSubmitted",
                label: "submitted",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsFormChildren",
                id: "organismsFormChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "MoleculesFileUpload"
                        },
                        {
                            modelId: "MoleculesGroup"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [
            ["idOrganismsForm"],
            ["organismsFormSubmitHandler"],
            ["organismsFormSchema"],
            ["organismsFormFields"],
            ["organismsFormSubmitted"],
            ["organismsFormChildren"]
        ],
        titleFieldId: "idOrganismsForm"
    }),
    new CmsModelPlugin({
        name: "Organisms Hero",
        modelId: "OrganismsHero",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsHero",
                id: "idOrganismsHero",
                label: "Organisms Hero Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsHeroChildren",
                id: "organismsHeroChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "AtomsRichText"
                        },
                        {
                            modelId: "MoleculesAlert"
                        },
                        {
                            modelId: "MoleculesButton"
                        },
                        {
                            modelId: "MoleculesHeading"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [["idOrganismsHero"], ["organismsHeroChildren"]],
        titleFieldId: "idOrganismsHero"
    }),
    new CmsModelPlugin({
        name: "Organisms Item",
        modelId: "OrganismsItem",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsItem",
                id: "idOrganismsItem",
                label: "Organisms Item Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsItemId",
                id: "organismsItemId",
                label: "id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsItemTitle",
                id: "organismsItemTitle",
                label: "title",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsItemExpanded",
                id: "organismsItemExpanded",
                label: "expanded",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsItemDisabled",
                id: "organismsItemDisabled",
                label: "disabled",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsItemRef",
                id: "organismsItemRef",
                label: "ref",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [
            ["idOrganismsItem"],
            ["organismsItemId"],
            ["organismsItemTitle"],
            ["organismsItemExpanded"],
            ["organismsItemDisabled"],
            ["organismsItemRef"]
        ],
        titleFieldId: "idOrganismsItem"
    }),
    new CmsModelPlugin({
        name: "Organisms Legal Menu",
        modelId: "OrganismsLegalMenu",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsLegalMenu",
                id: "idOrganismsLegalMenu",
                label: "Organisms Legal Menu Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsLegalMenuOrientation",
                id: "organismsLegalMenuOrientation",
                label: "orientation",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [["idOrganismsLegalMenu"], ["organismsLegalMenuOrientation"]],
        titleFieldId: "idOrganismsLegalMenu"
    }),
    new CmsModelPlugin({
        name: "Organisms Links Menu",
        modelId: "OrganismsLinksMenu",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsLinksMenu",
                id: "idOrganismsLinksMenu",
                label: "Organisms Links Menu Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsLinksMenuLinks",
                id: "organismsLinksMenuLinks",
                label: "links",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [["idOrganismsLinksMenu"], ["organismsLinksMenuLinks"]],
        titleFieldId: "idOrganismsLinksMenu"
    }),
    new CmsModelPlugin({
        name: "Organisms Maximal",
        modelId: "OrganismsMaximal",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsMaximal",
                id: "idOrganismsMaximal",
                label: "Organisms Maximal Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsMaximalCategories",
                id: "organismsMaximalCategories",
                label: "categories",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [["idOrganismsMaximal"], ["organismsMaximalCategories"]],
        titleFieldId: "idOrganismsMaximal"
    }),
    new CmsModelPlugin({
        name: "Organisms Minimal",
        modelId: "OrganismsMinimal",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsMinimal",
                id: "idOrganismsMinimal",
                label: "Organisms Minimal Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsMinimalCopyright",
                id: "organismsMinimalCopyright",
                label: "copyright",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsMinimalSocial",
                id: "organismsMinimalSocial",
                label: "social",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [["idOrganismsMinimal"], ["organismsMinimalCopyright"], ["organismsMinimalSocial"]],
        titleFieldId: "idOrganismsMinimal"
    }),
    new CmsModelPlugin({
        name: "Organisms Navbar",
        modelId: "OrganismsNavbar",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsNavbar",
                id: "idOrganismsNavbar",
                label: "Organisms Navbar Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsNavbarTitle",
                id: "organismsNavbarTitle",
                label: "title",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsNavbarApps",
                id: "organismsNavbarApps",
                label: "apps",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsNavbarLinks",
                id: "organismsNavbarLinks",
                label: "links",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsNavbarAppName",
                id: "organismsNavbarAppName",
                label: "appName",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsNavbarCookieConfig",
                id: "organismsNavbarCookieConfig",
                label: "cookieConfig",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsNavbarId",
                id: "organismsNavbarId",
                label: "id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsNavbarChildren",
                id: "organismsNavbarChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "AtomsLogo"
                        },
                        {
                            modelId: "MoleculesMenu"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [
            ["idOrganismsNavbar"],
            ["organismsNavbarTitle"],
            ["organismsNavbarApps"],
            ["organismsNavbarLinks"],
            ["organismsNavbarAppName"],
            ["organismsNavbarCookieConfig"],
            ["organismsNavbarId"],
            ["organismsNavbarChildren"]
        ],
        titleFieldId: "idOrganismsNavbar"
    }),
    new CmsModelPlugin({
        name: "Organisms Newsletter",
        modelId: "OrganismsNewsletter",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsNewsletter",
                id: "idOrganismsNewsletter",
                label: "Organisms Newsletter Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [["idOrganismsNewsletter"]],
        titleFieldId: "idOrganismsNewsletter"
    }),
    new CmsModelPlugin({
        name: "Organisms Row",
        modelId: "OrganismsRow",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsRow",
                id: "idOrganismsRow",
                label: "Organisms Row Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsRowType",
                id: "organismsRowType",
                label: "type",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsRowHidden",
                id: "organismsRowHidden",
                label: "hidden",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsRowVariant",
                id: "organismsRowVariant",
                label: "variant",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsRowId",
                id: "organismsRowId",
                label: "id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsRowChildren",
                id: "organismsRowChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "OrganismsDatum"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [
            ["idOrganismsRow"],
            ["organismsRowType"],
            ["organismsRowHidden"],
            ["organismsRowVariant"],
            ["organismsRowId"],
            ["organismsRowChildren"]
        ],
        titleFieldId: "idOrganismsRow"
    }),
    new CmsModelPlugin({
        name: "Organisms Search List",
        modelId: "OrganismsSearchList",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsSearchList",
                id: "idOrganismsSearchList",
                label: "Organisms Search List Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsSearchListData",
                id: "organismsSearchListData",
                label: "data",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsSearchListFieldButton",
                id: "organismsSearchListFieldButton",
                label: "fieldButton",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsSearchListDataSearchResults",
                id: "organismsSearchListDataSearchResults",
                label: "dataSearchResults",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsSearchListChildren",
                id: "organismsSearchListChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "MoleculesControl"
                        },
                        {
                            modelId: "MoleculesDetailList"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [
            ["idOrganismsSearchList"],
            ["organismsSearchListData"],
            ["organismsSearchListFieldButton"],
            ["organismsSearchListDataSearchResults"],
            ["organismsSearchListChildren"]
        ],
        titleFieldId: "idOrganismsSearchList"
    }),
    new CmsModelPlugin({
        name: "Organisms Social Media Menu",
        modelId: "OrganismsSocialMediaMenu",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsSocialMediaMenu",
                id: "idOrganismsSocialMediaMenu",
                label: "Organisms Social Media Menu Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsSocialMediaMenuOrientation",
                id: "organismsSocialMediaMenuOrientation",
                label: "orientation",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsSocialMediaMenuSocial",
                id: "organismsSocialMediaMenuSocial",
                label: "social",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsSocialMediaMenuChildren",
                id: "organismsSocialMediaMenuChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "MoleculesMenu"
                        },
                        {
                            modelId: "OrganismsFooter"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [
            ["idOrganismsSocialMediaMenu"],
            ["organismsSocialMediaMenuOrientation"],
            ["organismsSocialMediaMenuSocial"],
            ["organismsSocialMediaMenuChildren"]
        ],
        titleFieldId: "idOrganismsSocialMediaMenu"
    }),
    new CmsModelPlugin({
        name: "Organisms Step",
        modelId: "OrganismsStep",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsStep",
                id: "idOrganismsStep",
                label: "Organisms Step Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsStepNumber",
                id: "organismsStepNumber",
                label: "number",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [["idOrganismsStep"], ["organismsStepNumber"]],
        titleFieldId: "idOrganismsStep"
    }),
    new CmsModelPlugin({
        name: "Organisms Table",
        modelId: "OrganismsTable",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsTable",
                id: "idOrganismsTable",
                label: "Organisms Table Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsTableData",
                id: "organismsTableData",
                label: "data",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsTableSettings",
                id: "organismsTableSettings",
                label: "settings",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsTableMobileBreakpoint",
                id: "organismsTableMobileBreakpoint",
                label: "mobileBreakpoint",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "md",
                            value: "md",
                            selected: true
                        },
                        {
                            label: "lg",
                            value: "lg",
                            selected: false
                        },
                        {
                            label: "xl",
                            value: "xl",
                            selected: false
                        },
                        {
                            label: "xxl",
                            value: "xxl",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "organismsTableDuration",
                id: "organismsTableDuration",
                label: "duration",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "organismsTableDataRows",
                id: "organismsTableDataRows",
                label: "dataRows",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsTableChildren",
                id: "organismsTableChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "AtomsDropDown"
                        },
                        {
                            modelId: "MoleculesPagination"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [
            ["idOrganismsTable"],
            ["organismsTableData"],
            ["organismsTableSettings"],
            ["organismsTableMobileBreakpoint"],
            ["organismsTableDuration"],
            ["organismsTableDataRows"],
            ["organismsTableChildren"]
        ],
        titleFieldId: "idOrganismsTable"
    }),
    new CmsModelPlugin({
        name: "Organisms Wizard",
        modelId: "OrganismsWizard",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsWizard",
                id: "idOrganismsWizard",
                label: "Organisms Wizard Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsWizardStepCount",
                id: "organismsWizardStepCount",
                label: "stepCount",
                type: "number",
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "organismsWizardChildren",
                id: "organismsWizardChildren",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "AtomsProgressBar"
                        },
                        {
                            modelId: "MoleculesBreadcrumb"
                        },
                        {
                            modelId: "OrganismsForm"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [["idOrganismsWizard"], ["organismsWizardStepCount"], ["organismsWizardChildren"]],
        titleFieldId: "idOrganismsWizard"
    }),
    new CmsGroupPlugin({
        id: "templates",
        name: "Templates",
        slug: "templates",
        icon: "fas/id-card-alt",
        description: ""
    }),
    new CmsModelPlugin({
        name: "Templates Buy Homepage",
        modelId: "TemplatesBuyHomepage",
        description: "",
        fields: [
            {
                fieldId: "idTemplatesBuyHomepage",
                id: "idTemplatesBuyHomepage",
                label: "Templates Buy Homepage Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "templatesBuyHomepageIsLoading",
                id: "templatesBuyHomepageIsLoading",
                label: "isLoading",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "templatesBuyHomepageIsError",
                id: "templatesBuyHomepageIsError",
                label: "isError",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            }
        ],
        group: {
            id: "templates",
            name: "Templates"
        },
        layout: [
            ["idTemplatesBuyHomepage"],
            ["templatesBuyHomepageIsLoading"],
            ["templatesBuyHomepageIsError"]
        ],
        titleFieldId: "idTemplatesBuyHomepage"
    }),
    new CmsModelPlugin({
        name: "Templates Default",
        modelId: "TemplatesDefault",
        description: "",
        fields: [
            {
                fieldId: "idTemplatesDefault",
                id: "idTemplatesDefault",
                label: "Templates Default Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "templatesDefaultIsLoading",
                id: "templatesDefaultIsLoading",
                label: "isLoading",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "templatesDefaultIsError",
                id: "templatesDefaultIsError",
                label: "isError",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            }
        ],
        group: {
            id: "templates",
            name: "Templates"
        },
        layout: [
            ["idTemplatesDefault"],
            ["templatesDefaultIsLoading"],
            ["templatesDefaultIsError"]
        ],
        titleFieldId: "idTemplatesDefault"
    }),
    new CmsModelPlugin({
        name: "Templates Devops Centered",
        modelId: "TemplatesDevopsCentered",
        description: "",
        fields: [
            {
                fieldId: "idTemplatesDevopsCentered",
                id: "idTemplatesDevopsCentered",
                label: "Templates Devops Centered Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "templatesDevopsCenteredIsLoading",
                id: "templatesDevopsCenteredIsLoading",
                label: "isLoading",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "templatesDevopsCenteredIsError",
                id: "templatesDevopsCenteredIsError",
                label: "isError",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            }
        ],
        group: {
            id: "templates",
            name: "Templates"
        },
        layout: [
            ["idTemplatesDevopsCentered"],
            ["templatesDevopsCenteredIsLoading"],
            ["templatesDevopsCenteredIsError"]
        ],
        titleFieldId: "idTemplatesDevopsCentered"
    }),
    new CmsModelPlugin({
        name: "Templates Devops Dashboard",
        modelId: "TemplatesDevopsDashboard",
        description: "",
        fields: [
            {
                fieldId: "idTemplatesDevopsDashboard",
                id: "idTemplatesDevopsDashboard",
                label: "Templates Devops Dashboard Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "templatesDevopsDashboardIsLoading",
                id: "templatesDevopsDashboardIsLoading",
                label: "isLoading",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "templatesDevopsDashboardIsError",
                id: "templatesDevopsDashboardIsError",
                label: "isError",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            }
        ],
        group: {
            id: "templates",
            name: "Templates"
        },
        layout: [
            ["idTemplatesDevopsDashboard"],
            ["templatesDevopsDashboardIsLoading"],
            ["templatesDevopsDashboardIsError"]
        ],
        titleFieldId: "idTemplatesDevopsDashboard"
    }),
    new CmsModelPlugin({
        name: "Templates Explorer Charts",
        modelId: "TemplatesExplorerCharts",
        description: "",
        fields: [
            {
                fieldId: "idTemplatesExplorerCharts",
                id: "idTemplatesExplorerCharts",
                label: "Templates Explorer Charts Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "templatesExplorerChartsIsLoading",
                id: "templatesExplorerChartsIsLoading",
                label: "isLoading",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "templatesExplorerChartsIsError",
                id: "templatesExplorerChartsIsError",
                label: "isError",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            }
        ],
        group: {
            id: "templates",
            name: "Templates"
        },
        layout: [
            ["idTemplatesExplorerCharts"],
            ["templatesExplorerChartsIsLoading"],
            ["templatesExplorerChartsIsError"]
        ],
        titleFieldId: "idTemplatesExplorerCharts"
    }),
    new CmsModelPlugin({
        name: "Templates Explorer Detail",
        modelId: "TemplatesExplorerDetail",
        description: "",
        fields: [
            {
                fieldId: "idTemplatesExplorerDetail",
                id: "idTemplatesExplorerDetail",
                label: "Templates Explorer Detail Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "templatesExplorerDetailIsLoading",
                id: "templatesExplorerDetailIsLoading",
                label: "isLoading",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "templatesExplorerDetailIsError",
                id: "templatesExplorerDetailIsError",
                label: "isError",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            }
        ],
        group: {
            id: "templates",
            name: "Templates"
        },
        layout: [
            ["idTemplatesExplorerDetail"],
            ["templatesExplorerDetailIsLoading"],
            ["templatesExplorerDetailIsError"]
        ],
        titleFieldId: "idTemplatesExplorerDetail"
    }),
    new CmsModelPlugin({
        name: "Templates Explorer Homepage",
        modelId: "TemplatesExplorerHomepage",
        description: "",
        fields: [
            {
                fieldId: "idTemplatesExplorerHomepage",
                id: "idTemplatesExplorerHomepage",
                label: "Templates Explorer Homepage Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "templatesExplorerHomepageIsLoading",
                id: "templatesExplorerHomepageIsLoading",
                label: "isLoading",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "templatesExplorerHomepageIsError",
                id: "templatesExplorerHomepageIsError",
                label: "isError",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            }
        ],
        group: {
            id: "templates",
            name: "Templates"
        },
        layout: [
            ["idTemplatesExplorerHomepage"],
            ["templatesExplorerHomepageIsLoading"],
            ["templatesExplorerHomepageIsError"]
        ],
        titleFieldId: "idTemplatesExplorerHomepage"
    }),
    new CmsModelPlugin({
        name: "Templates Explorer List",
        modelId: "TemplatesExplorerList",
        description: "",
        fields: [
            {
                fieldId: "idTemplatesExplorerList",
                id: "idTemplatesExplorerList",
                label: "Templates Explorer List Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "templatesExplorerListIsLoading",
                id: "templatesExplorerListIsLoading",
                label: "isLoading",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "templatesExplorerListIsError",
                id: "templatesExplorerListIsError",
                label: "isError",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            }
        ],
        group: {
            id: "templates",
            name: "Templates"
        },
        layout: [
            ["idTemplatesExplorerList"],
            ["templatesExplorerListIsLoading"],
            ["templatesExplorerListIsError"]
        ],
        titleFieldId: "idTemplatesExplorerList"
    }),
    new CmsModelPlugin({
        name: "Templates Extension Default",
        modelId: "TemplatesExtensionDefault",
        description: "",
        fields: [
            {
                fieldId: "idTemplatesExtensionDefault",
                id: "idTemplatesExtensionDefault",
                label: "Templates Extension Default Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "templatesExtensionDefaultIsLoading",
                id: "templatesExtensionDefaultIsLoading",
                label: "isLoading",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "templatesExtensionDefaultIsError",
                id: "templatesExtensionDefaultIsError",
                label: "isError",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            }
        ],
        group: {
            id: "templates",
            name: "Templates"
        },
        layout: [
            ["idTemplatesExtensionDefault"],
            ["templatesExtensionDefaultIsLoading"],
            ["templatesExtensionDefaultIsError"]
        ],
        titleFieldId: "idTemplatesExtensionDefault"
    }),
    new CmsModelPlugin({
        name: "Templates Wallet Dashboard",
        modelId: "TemplatesWalletDashboard",
        description: "",
        fields: [
            {
                fieldId: "idTemplatesWalletDashboard",
                id: "idTemplatesWalletDashboard",
                label: "Templates Wallet Dashboard Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "templatesWalletDashboardIsLoading",
                id: "templatesWalletDashboardIsLoading",
                label: "isLoading",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "templatesWalletDashboardIsError",
                id: "templatesWalletDashboardIsError",
                label: "isError",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            }
        ],
        group: {
            id: "templates",
            name: "Templates"
        },
        layout: [
            ["idTemplatesWalletDashboard"],
            ["templatesWalletDashboardIsLoading"],
            ["templatesWalletDashboardIsError"]
        ],
        titleFieldId: "idTemplatesWalletDashboard"
    }),
    new CmsModelPlugin({
        name: "Templates Wallet Homepage",
        modelId: "TemplatesWalletHomepage",
        description: "",
        fields: [
            {
                fieldId: "idTemplatesWalletHomepage",
                id: "idTemplatesWalletHomepage",
                label: "Templates Wallet Homepage Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "templatesWalletHomepageIsLoading",
                id: "templatesWalletHomepageIsLoading",
                label: "isLoading",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "templatesWalletHomepageIsError",
                id: "templatesWalletHomepageIsError",
                label: "isError",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            }
        ],
        group: {
            id: "templates",
            name: "Templates"
        },
        layout: [
            ["idTemplatesWalletHomepage"],
            ["templatesWalletHomepageIsLoading"],
            ["templatesWalletHomepageIsError"]
        ],
        titleFieldId: "idTemplatesWalletHomepage"
    }),
    new CmsModelPlugin({
        name: "Templates Wallet Option",
        modelId: "TemplatesWalletOption",
        description: "",
        fields: [
            {
                fieldId: "idTemplatesWalletOption",
                id: "idTemplatesWalletOption",
                label: "Templates Wallet Option Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "templatesWalletOptionIsLoading",
                id: "templatesWalletOptionIsLoading",
                label: "isLoading",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "templatesWalletOptionIsError",
                id: "templatesWalletOptionIsError",
                label: "isError",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            }
        ],
        group: {
            id: "templates",
            name: "Templates"
        },
        layout: [
            ["idTemplatesWalletOption"],
            ["templatesWalletOptionIsLoading"],
            ["templatesWalletOptionIsError"]
        ],
        titleFieldId: "idTemplatesWalletOption"
    }),
    new CmsModelPlugin({
        name: "Templates Wallet Wizard",
        modelId: "TemplatesWalletWizard",
        description: "",
        fields: [
            {
                fieldId: "idTemplatesWalletWizard",
                id: "idTemplatesWalletWizard",
                label: "Templates Wallet Wizard Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "templatesWalletWizardIsLoading",
                id: "templatesWalletWizardIsLoading",
                label: "isLoading",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "templatesWalletWizardIsError",
                id: "templatesWalletWizardIsError",
                label: "isError",
                type: "boolean",
                renderer: {
                    name: "boolean-input"
                }
            }
        ],
        group: {
            id: "templates",
            name: "Templates"
        },
        layout: [
            ["idTemplatesWalletWizard"],
            ["templatesWalletWizardIsLoading"],
            ["templatesWalletWizardIsError"]
        ],
        titleFieldId: "idTemplatesWalletWizard"
    })
];

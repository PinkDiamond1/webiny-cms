import { CmsModelPlugin } from "@webiny/api-headless-cms/content/plugins/CmsModelPlugin";
import { CmsGroupPlugin } from "@webiny/api-headless-cms/content/plugins/CmsGroupPlugin";

export default [
    new CmsGroupPlugin({
        id: "pages",
        name: "Pages",
        slug: "pages",
        icon: "fas/id-card-alt",
        description: "Dusk website pages models"
    }),
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
                fieldId: "RICH_TEXT_BLOCKS_ATOMS_ADDRESS",
                id: "RICH_TEXT_BLOCKS_ATOMS_ADDRESS",
                label: "Rich Text Content Of Atoms Address",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
        layout: [["idAtomsAddress"], ["RICH_TEXT_BLOCKS_ATOMS_ADDRESS"], ["atomsAddressVariant"]],
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
            },
            {
                fieldId: "RICH_TEXT_BLOCKS_ATOMS_BALANCE",
                id: "RICH_TEXT_BLOCKS_ATOMS_BALANCE",
                label: "Rich Text Content Of Atoms Balance",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            }
        ],
        group: {
            id: "atoms",
            name: "Atoms"
        },
        layout: [["idAtomsBalance"], ["RICH_TEXT_BLOCKS_ATOMS_BALANCE"]],
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
                fieldId: "RICH_TEXT_BLOCKS_ATOMS_CHIP",
                id: "RICH_TEXT_BLOCKS_ATOMS_CHIP",
                label: "Rich Text Content Of Atoms Chip",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
        layout: [["idAtomsChip"], ["RICH_TEXT_BLOCKS_ATOMS_CHIP"], ["atomsChipVariant"]],
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
                fieldId: "RICH_TEXT_BLOCKS_ATOMS_DATE_TEXT",
                id: "RICH_TEXT_BLOCKS_ATOMS_DATE_TEXT",
                label: "Rich Text Content Of Atoms Date Text",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "atomsDateTextTime",
                id: "atomsDateTextTime",
                label: "time",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsDateTextShowTimestamp",
                id: "atomsDateTextShowTimestamp",
                label: "showTimestamp",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsDateTextDatetimeFormat",
                id: "atomsDateTextDatetimeFormat",
                label: "datetimeFormat",
                type: "text",
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_ATOMS_DATE_TEXT"],
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
                fieldId: "RICH_TEXT_BLOCKS_ATOMS_DROP_DOWN",
                id: "RICH_TEXT_BLOCKS_ATOMS_DROP_DOWN",
                label: "Rich Text Content Of Atoms Drop Down",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "atomsDropDownOptions",
                id: "atomsDropDownOptions",
                label: "options",
                type: "object",
                multipleValues: true,
                renderer: {
                    name: "objects"
                },
                settings: {
                    fields: [
                        {
                            id: "key_f40433f0-2571-48b0-9335-92cadb9fbc28",
                            helpText: "",
                            placeholderText: "Key",
                            label: "Key",
                            type: "text",
                            validation: [],
                            fieldId: "key",
                            renderer: {
                                name: "text-input"
                            }
                        },
                        {
                            id: "value_5088f4e0-081c-492a-bf62-a80c32ed18e2",
                            helpText: "",
                            placeholderText: "Value",
                            label: "Value",
                            type: "text",
                            validation: [],
                            fieldId: "value",
                            renderer: {
                                name: "text-input"
                            }
                        }
                    ],
                    layout: [
                        ["key_f40433f0-2571-48b0-9335-92cadb9fbc28"],
                        ["value_5088f4e0-081c-492a-bf62-a80c32ed18e2"]
                    ]
                }
            },
            {
                fieldId: "atomsDropDownSelectedIndex",
                id: "atomsDropDownSelectedIndex",
                label: "selectedIndex",
                type: "number",
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsDropDownDropUp",
                id: "atomsDropDownDropUp",
                label: "dropUp",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsDropDownDisabled",
                id: "atomsDropDownDisabled",
                label: "disabled",
                type: "boolean",
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_ATOMS_DROP_DOWN"],
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
                fieldId: "RICH_TEXT_BLOCKS_ATOMS_GAUGE",
                id: "RICH_TEXT_BLOCKS_ATOMS_GAUGE",
                label: "Rich Text Content Of Atoms Gauge",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "atomsGaugeMaxValue",
                id: "atomsGaugeMaxValue",
                label: "maxValue",
                type: "number",
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsGaugeMinValue",
                id: "atomsGaugeMinValue",
                label: "minValue",
                type: "number",
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsGaugeValue",
                id: "atomsGaugeValue",
                label: "value",
                type: "number",
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsGaugeWidth",
                id: "atomsGaugeWidth",
                label: "width",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsGaugeTooltip",
                id: "atomsGaugeTooltip",
                label: "tooltip",
                type: "boolean",
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_ATOMS_GAUGE"],
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
                fieldId: "RICH_TEXT_BLOCKS_ATOMS_ICON",
                id: "RICH_TEXT_BLOCKS_ATOMS_ICON",
                label: "Rich Text Content Of Atoms Icon",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "atomsIconName",
                id: "atomsIconName",
                label: "name",
                type: "text",
                multipleValues: false,
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
                multipleValues: false,
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
                multipleValues: false,
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
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsIconViewbox",
                id: "atomsIconViewbox",
                label: "viewbox",
                type: "text",
                multipleValues: false,
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
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_ATOMS_ICON"],
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
                fieldId: "RICH_TEXT_BLOCKS_ATOMS_LOADING_INDICATOR",
                id: "RICH_TEXT_BLOCKS_ATOMS_LOADING_INDICATOR",
                label: "Rich Text Content Of Atoms Loading Indicator",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_ATOMS_LOADING_INDICATOR"],
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
            },
            {
                fieldId: "RICH_TEXT_BLOCKS_ATOMS_LOGO",
                id: "RICH_TEXT_BLOCKS_ATOMS_LOGO",
                label: "Rich Text Content Of Atoms Logo",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            }
        ],
        group: {
            id: "atoms",
            name: "Atoms"
        },
        layout: [["idAtomsLogo"], ["RICH_TEXT_BLOCKS_ATOMS_LOGO"]],
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
                fieldId: "RICH_TEXT_BLOCKS_ATOMS_PROGRESS_BAR",
                id: "RICH_TEXT_BLOCKS_ATOMS_PROGRESS_BAR",
                label: "Rich Text Content Of Atoms Progress Bar",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsProgressBarStep",
                id: "atomsProgressBarStep",
                label: "step",
                type: "text",
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_ATOMS_PROGRESS_BAR"],
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
                fieldId: "RICH_TEXT_BLOCKS_ATOMS_QR_CODE",
                id: "RICH_TEXT_BLOCKS_ATOMS_QR_CODE",
                label: "Rich Text Content Of Atoms Qr Code",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "atomsQrCodeValue",
                id: "atomsQrCodeValue",
                label: "value",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsQrCodeWidth",
                id: "atomsQrCodeWidth",
                label: "width",
                type: "number",
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsQrCodeQrColor",
                id: "atomsQrCodeQrColor",
                label: "qrColor",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsQrCodeBgColor",
                id: "atomsQrCodeBgColor",
                label: "bgColor",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsQrCodeAlign",
                id: "atomsQrCodeAlign",
                label: "align",
                type: "text",
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_ATOMS_QR_CODE"],
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
                fieldId: "RICH_TEXT_BLOCKS_ATOMS_RICH_TEXT",
                id: "RICH_TEXT_BLOCKS_ATOMS_RICH_TEXT",
                label: "Rich Text Content Of Atoms Rich Text",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "atomsRichTextMarkdown",
                id: "atomsRichTextMarkdown",
                label: "markdown",
                type: "text",
                multipleValues: false,
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
                multipleValues: false,
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
                multipleValues: false,
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
                fieldId: "atomsRichTextSlotDefault",
                id: "atomsRichTextSlotDefault",
                label: "__default__",
                type: "ref",
                helpText: "Allowed components: OrganismsAccordion",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            ["RICH_TEXT_BLOCKS_ATOMS_RICH_TEXT"],
            ["atomsRichTextMarkdown"],
            ["atomsRichTextSize"],
            ["atomsRichTextAlign"],
            ["atomsRichTextSlotDefault"]
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
                fieldId: "RICH_TEXT_BLOCKS_ATOMS_SKELETON_LOADER",
                id: "RICH_TEXT_BLOCKS_ATOMS_SKELETON_LOADER",
                label: "Rich Text Content Of Atoms Skeleton Loader",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsSkeletonLoaderSmallScreenHeight",
                id: "atomsSkeletonLoaderSmallScreenHeight",
                label: "smallScreenHeight",
                type: "number",
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsSkeletonLoaderMediumScreenHeight",
                id: "atomsSkeletonLoaderMediumScreenHeight",
                label: "mediumScreenHeight",
                type: "number",
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsSkeletonLoaderLargeScreenHeight",
                id: "atomsSkeletonLoaderLargeScreenHeight",
                label: "largeScreenHeight",
                type: "number",
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsSkeletonLoaderExtraLargeScreenHeight",
                id: "atomsSkeletonLoaderExtraLargeScreenHeight",
                label: "extraLargeScreenHeight",
                type: "number",
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsSkeletonLoaderJumboScreenHeight",
                id: "atomsSkeletonLoaderJumboScreenHeight",
                label: "jumboScreenHeight",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsSkeletonLoaderWidth",
                id: "atomsSkeletonLoaderWidth",
                label: "width",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsSkeletonLoaderPulse",
                id: "atomsSkeletonLoaderPulse",
                label: "pulse",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsSkeletonLoaderRounded",
                id: "atomsSkeletonLoaderRounded",
                label: "rounded",
                type: "boolean",
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_ATOMS_SKELETON_LOADER"],
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
                fieldId: "RICH_TEXT_BLOCKS_ATOMS_SLIDER",
                id: "RICH_TEXT_BLOCKS_ATOMS_SLIDER",
                label: "Rich Text Content Of Atoms Slider",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "atomsSliderMin",
                id: "atomsSliderMin",
                label: "min",
                type: "number",
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsSliderMax",
                id: "atomsSliderMax",
                label: "max",
                type: "number",
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsSliderValue",
                id: "atomsSliderValue",
                label: "value",
                type: "number",
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "atomsSliderId",
                id: "atomsSliderId",
                label: "id",
                type: "text",
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_ATOMS_SLIDER"],
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
                fieldId: "RICH_TEXT_BLOCKS_ATOMS_TEXT_FIELD",
                id: "RICH_TEXT_BLOCKS_ATOMS_TEXT_FIELD",
                label: "Rich Text Content Of Atoms Text Field",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "atomsTextFieldValue",
                id: "atomsTextFieldValue",
                label: "value",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsTextFieldDisabled",
                id: "atomsTextFieldDisabled",
                label: "disabled",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsTextFieldMultiline",
                id: "atomsTextFieldMultiline",
                label: "multiline",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsTextFieldPlaceholder",
                id: "atomsTextFieldPlaceholder",
                label: "placeholder",
                type: "text",
                multipleValues: false,
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
                multipleValues: false,
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
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsTextFieldName",
                id: "atomsTextFieldName",
                label: "name",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsTextFieldFocused",
                id: "atomsTextFieldFocused",
                label: "focused",
                type: "boolean",
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_ATOMS_TEXT_FIELD"],
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
                fieldId: "RICH_TEXT_BLOCKS_ATOMS_TOGGLE",
                id: "RICH_TEXT_BLOCKS_ATOMS_TOGGLE",
                label: "Rich Text Content Of Atoms Toggle",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
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
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsToggleChecked",
                id: "atomsToggleChecked",
                label: "checked",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsToggleId",
                id: "atomsToggleId",
                label: "id",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsToggleValue",
                id: "atomsToggleValue",
                label: "value",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsToggleGroup",
                id: "atomsToggleGroup",
                label: "group",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsToggleDisabled",
                id: "atomsToggleDisabled",
                label: "disabled",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsToggleSelected",
                id: "atomsToggleSelected",
                label: "selected",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "atomsToggleOnIcon",
                id: "atomsToggleOnIcon",
                label: "onIcon",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsToggleOffIcon",
                id: "atomsToggleOffIcon",
                label: "offIcon",
                type: "text",
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_ATOMS_TOGGLE"],
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
                fieldId: "RICH_TEXT_BLOCKS_ATOMS_TRUNCATE_TEXT",
                id: "RICH_TEXT_BLOCKS_ATOMS_TRUNCATE_TEXT",
                label: "Rich Text Content Of Atoms Truncate Text",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "atomsTruncateTextText",
                id: "atomsTruncateTextText",
                label: "text",
                type: "text",
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_ATOMS_TRUNCATE_TEXT"],
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_ALERT",
                id: "RICH_TEXT_BLOCKS_MOLECULES_ALERT",
                label: "Rich Text Content Of Molecules Alert",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "moleculesAlertValue",
                id: "moleculesAlertValue",
                label: "value",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesAlertId",
                id: "moleculesAlertId",
                label: "id",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesAlertDismissable",
                id: "moleculesAlertDismissable",
                label: "dismissable",
                type: "boolean",
                multipleValues: false,
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
                multipleValues: false,
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
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesAlertSlotDefault",
                id: "moleculesAlertSlotDefault",
                label: "__default__",
                type: "ref",
                helpText: "Allowed components: AtomsIcon",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
                settings: {
                    models: [
                        {
                            modelId: "AtomsIcon"
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesAlertSlotActions",
                id: "moleculesAlertSlotActions",
                label: "actions",
                type: "ref",
                helpText: "Allowed components: AtomsIcon",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
                settings: {
                    models: [
                        {
                            modelId: "AtomsIcon"
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesAlertSlotIcon",
                id: "moleculesAlertSlotIcon",
                label: "icon",
                type: "ref",
                helpText: "Allowed components: AtomsIcon",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
                settings: {
                    models: [
                        {
                            modelId: "AtomsIcon"
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesAlertSlotTitle",
                id: "moleculesAlertSlotTitle",
                label: "title",
                type: "ref",
                helpText: "Allowed components: AtomsIcon",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            ["RICH_TEXT_BLOCKS_MOLECULES_ALERT"],
            ["moleculesAlertValue"],
            ["moleculesAlertId"],
            ["moleculesAlertDismissable"],
            ["moleculesAlertVariant"],
            ["moleculesAlertModal"],
            ["moleculesAlertSlotDefault"],
            ["moleculesAlertSlotActions"],
            ["moleculesAlertSlotIcon"],
            ["moleculesAlertSlotTitle"]
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_BREADCRUMB",
                id: "RICH_TEXT_BLOCKS_MOLECULES_BREADCRUMB",
                label: "Rich Text Content Of Molecules Breadcrumb",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "moleculesBreadcrumbHref",
                id: "moleculesBreadcrumbHref",
                label: "href",
                type: "text",
                multipleValues: false,
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
            ["idMoleculesBreadcrumb"],
            ["RICH_TEXT_BLOCKS_MOLECULES_BREADCRUMB"],
            ["moleculesBreadcrumbHref"]
        ],
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_BUTTON",
                id: "RICH_TEXT_BLOCKS_MOLECULES_BUTTON",
                label: "Rich Text Content Of Molecules Button",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "moleculesButtonId",
                id: "moleculesButtonId",
                label: "id",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesButtonValue",
                id: "moleculesButtonValue",
                label: "value",
                type: "boolean",
                multipleValues: false,
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
                multipleValues: false,
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
                multipleValues: false,
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
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesButtonCircle",
                id: "moleculesButtonCircle",
                label: "circle",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesButtonBlock",
                id: "moleculesButtonBlock",
                label: "block",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesButtonHref",
                id: "moleculesButtonHref",
                label: "href",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesButtonActive",
                id: "moleculesButtonActive",
                label: "active",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesButtonDisabled",
                id: "moleculesButtonDisabled",
                label: "disabled",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesButtonLabel",
                id: "moleculesButtonLabel",
                label: "label",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesButtonSlotDefault",
                id: "moleculesButtonSlotDefault",
                label: "__default__",
                type: "ref",
                helpText: "Allowed components: AtomsIcon,MoleculesLabel",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "moleculesButtonSlotLabelLeft",
                id: "moleculesButtonSlotLabelLeft",
                label: "labelLeft",
                type: "ref",
                helpText: "Allowed components: AtomsIcon,MoleculesLabel",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "moleculesButtonSlotLabelRight",
                id: "moleculesButtonSlotLabelRight",
                label: "labelRight",
                type: "ref",
                helpText: "Allowed components: AtomsIcon,MoleculesLabel",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            ["RICH_TEXT_BLOCKS_MOLECULES_BUTTON"],
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
            ["moleculesButtonSlotDefault"],
            ["moleculesButtonSlotLabelLeft"],
            ["moleculesButtonSlotLabelRight"]
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_CHART",
                id: "RICH_TEXT_BLOCKS_MOLECULES_CHART",
                label: "Rich Text Content Of Molecules Chart",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "moleculesChartType",
                id: "moleculesChartType",
                label: "type",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesChartData",
                id: "moleculesChartData",
                label: "data",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesChartAspectRatio",
                id: "moleculesChartAspectRatio",
                label: "aspectRatio",
                type: "text",
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_MOLECULES_CHART"],
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_CONTENT",
                id: "RICH_TEXT_BLOCKS_MOLECULES_CONTENT",
                label: "Rich Text Content Of Molecules Content",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "moleculesContentSlotDefault",
                id: "moleculesContentSlotDefault",
                label: "__default__",
                type: "ref",
                helpText:
                    "Allowed components: AtomsAddress,AtomsQrCode,AtomsRichText,MoleculesDetailList,MoleculesDisclaimerList,MoleculesGroup,MoleculesHeading,OrganismsForm",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
        layout: [
            ["idMoleculesContent"],
            ["RICH_TEXT_BLOCKS_MOLECULES_CONTENT"],
            ["moleculesContentSlotDefault"]
        ],
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_CONTROL",
                id: "RICH_TEXT_BLOCKS_MOLECULES_CONTROL",
                label: "Rich Text Content Of Molecules Control",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "moleculesControlType",
                id: "moleculesControlType",
                label: "type",
                type: "text",
                renderer: {
                    name: "select-box"
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
                multipleValues: false,
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
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesControlLabel",
                id: "moleculesControlLabel",
                label: "label",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesControlMessage",
                id: "moleculesControlMessage",
                label: "message",
                type: "text",
                multipleValues: false,
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
                multipleValues: false,
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
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesControlGroup",
                id: "moleculesControlGroup",
                label: "group",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesControlSlotDefault",
                id: "moleculesControlSlotDefault",
                label: "__default__",
                type: "ref",
                helpText:
                    "Allowed components: AtomsDropDown,AtomsIcon,AtomsTextField,AtomsToggle,MoleculesFileUpload,MoleculesPasswordStrength",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "moleculesControlSlotButtonPostfix",
                id: "moleculesControlSlotButtonPostfix",
                label: "buttonPostfix",
                type: "ref",
                helpText:
                    "Allowed components: AtomsDropDown,AtomsIcon,AtomsTextField,AtomsToggle,MoleculesFileUpload,MoleculesPasswordStrength",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "moleculesControlSlotButtonPrefix",
                id: "moleculesControlSlotButtonPrefix",
                label: "buttonPrefix",
                type: "ref",
                helpText:
                    "Allowed components: AtomsDropDown,AtomsIcon,AtomsTextField,AtomsToggle,MoleculesFileUpload,MoleculesPasswordStrength",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            ["RICH_TEXT_BLOCKS_MOLECULES_CONTROL"],
            ["moleculesControlType"],
            ["moleculesControlState"],
            ["moleculesControlId"],
            ["moleculesControlLabel"],
            ["moleculesControlMessage"],
            ["moleculesControlWidth"],
            ["moleculesControlName"],
            ["moleculesControlGroup"],
            ["moleculesControlSlotDefault"],
            ["moleculesControlSlotButtonPostfix"],
            ["moleculesControlSlotButtonPrefix"]
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_CTA_LIST",
                id: "RICH_TEXT_BLOCKS_MOLECULES_CTA_LIST",
                label: "Rich Text Content Of Molecules Cta List",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
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
        layout: [
            ["idMoleculesCtaList"],
            ["RICH_TEXT_BLOCKS_MOLECULES_CTA_LIST"],
            ["moleculesCtaListVariant"],
            ["moleculesCtaListType"]
        ],
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_DETAIL_LIST",
                id: "RICH_TEXT_BLOCKS_MOLECULES_DETAIL_LIST",
                label: "Rich Text Content Of Molecules Detail List",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "moleculesDetailListSplit",
                id: "moleculesDetailListSplit",
                label: "split",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesDetailListSlotDefault",
                id: "moleculesDetailListSlotDefault",
                label: "__default__",
                type: "ref",
                helpText: "Allowed components: AtomsChip,AtomsIcon,AtomsRichText,MoleculesGroup",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            ["RICH_TEXT_BLOCKS_MOLECULES_DETAIL_LIST"],
            ["moleculesDetailListSplit"],
            ["moleculesDetailListSlotDefault"]
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_DISCLAIMER_LIST",
                id: "RICH_TEXT_BLOCKS_MOLECULES_DISCLAIMER_LIST",
                label: "Rich Text Content Of Molecules Disclaimer List",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "moleculesDisclaimerListSlotDefault",
                id: "moleculesDisclaimerListSlotDefault",
                label: "__default__",
                type: "ref",
                helpText: "Allowed components: MoleculesHeading",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
                settings: {
                    models: [
                        {
                            modelId: "MoleculesHeading"
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesDisclaimerListSlotHeading",
                id: "moleculesDisclaimerListSlotHeading",
                label: "heading",
                type: "ref",
                helpText: "Allowed components: MoleculesHeading",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
        layout: [
            ["idMoleculesDisclaimerList"],
            ["RICH_TEXT_BLOCKS_MOLECULES_DISCLAIMER_LIST"],
            ["moleculesDisclaimerListSlotDefault"],
            ["moleculesDisclaimerListSlotHeading"]
        ],
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_FILE_UPLOAD",
                id: "RICH_TEXT_BLOCKS_MOLECULES_FILE_UPLOAD",
                label: "Rich Text Content Of Molecules File Upload",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "moleculesFileUploadId",
                id: "moleculesFileUploadId",
                label: "id",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesFileUploadName",
                id: "moleculesFileUploadName",
                label: "name",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesFileUploadUploaded",
                id: "moleculesFileUploadUploaded",
                label: "uploaded",
                type: "boolean",
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_MOLECULES_FILE_UPLOAD"],
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_GROUP",
                id: "RICH_TEXT_BLOCKS_MOLECULES_GROUP",
                label: "Rich Text Content Of Molecules Group",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "moleculesGroupSlotDefault",
                id: "moleculesGroupSlotDefault",
                label: "__default__",
                type: "ref",
                helpText: "Allowed components: AtomsIcon,MoleculesButton,OrganismsCard",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "moleculesGroupSlotLabelLeft",
                id: "moleculesGroupSlotLabelLeft",
                label: "labelLeft",
                type: "ref",
                helpText: "Allowed components: AtomsIcon,MoleculesButton,OrganismsCard",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "moleculesGroupSlotLabelRight",
                id: "moleculesGroupSlotLabelRight",
                label: "labelRight",
                type: "ref",
                helpText: "Allowed components: AtomsIcon,MoleculesButton,OrganismsCard",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            ["RICH_TEXT_BLOCKS_MOLECULES_GROUP"],
            ["moleculesGroupAlign"],
            ["moleculesGroupGrid"],
            ["moleculesGroupSlotDefault"],
            ["moleculesGroupSlotLabelLeft"],
            ["moleculesGroupSlotLabelRight"]
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_HEADING",
                id: "RICH_TEXT_BLOCKS_MOLECULES_HEADING",
                label: "Rich Text Content Of Molecules Heading",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
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
                multipleValues: false,
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
                fieldId: "moleculesHeadingSlotDefault",
                id: "moleculesHeadingSlotDefault",
                label: "__default__",
                type: "ref",
                helpText:
                    "Allowed components: AtomsIcon,AtomsLoadingIndicator,MoleculesButton,MoleculesGroup",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "moleculesHeadingSlotButton",
                id: "moleculesHeadingSlotButton",
                label: "button",
                type: "ref",
                helpText:
                    "Allowed components: AtomsIcon,AtomsLoadingIndicator,MoleculesButton,MoleculesGroup",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "moleculesHeadingSlotHelp",
                id: "moleculesHeadingSlotHelp",
                label: "help",
                type: "ref",
                helpText:
                    "Allowed components: AtomsIcon,AtomsLoadingIndicator,MoleculesButton,MoleculesGroup",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "moleculesHeadingSlotIcon",
                id: "moleculesHeadingSlotIcon",
                label: "icon",
                type: "ref",
                helpText:
                    "Allowed components: AtomsIcon,AtomsLoadingIndicator,MoleculesButton,MoleculesGroup",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            ["RICH_TEXT_BLOCKS_MOLECULES_HEADING"],
            ["moleculesHeadingSize"],
            ["moleculesHeadingVariant"],
            ["moleculesHeadingAlign"],
            ["moleculesHeadingSlotDefault"],
            ["moleculesHeadingSlotButton"],
            ["moleculesHeadingSlotHelp"],
            ["moleculesHeadingSlotIcon"]
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_ITEM",
                id: "RICH_TEXT_BLOCKS_MOLECULES_ITEM",
                label: "Rich Text Content Of Molecules Item",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "moleculesItemIconName",
                id: "moleculesItemIconName",
                label: "iconName",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesItemIconViewbox",
                id: "moleculesItemIconViewbox",
                label: "iconViewbox",
                type: "text",
                multipleValues: false,
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
            ["idMoleculesItem"],
            ["RICH_TEXT_BLOCKS_MOLECULES_ITEM"],
            ["moleculesItemIconName"],
            ["moleculesItemIconViewbox"]
        ],
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
            },
            {
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_LABEL",
                id: "RICH_TEXT_BLOCKS_MOLECULES_LABEL",
                label: "Rich Text Content Of Molecules Label",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [["idMoleculesLabel"], ["RICH_TEXT_BLOCKS_MOLECULES_LABEL"]],
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_MEDIA_CONTENT",
                id: "RICH_TEXT_BLOCKS_MOLECULES_MEDIA_CONTENT",
                label: "Rich Text Content Of Molecules Media Content",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "moleculesMediaContentReverse",
                id: "moleculesMediaContentReverse",
                label: "reverse",
                type: "boolean",
                multipleValues: false,
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
                multipleValues: false,
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
                multipleValues: false,
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
                fieldId: "moleculesMediaContentSlotMedia",
                id: "moleculesMediaContentSlotMedia",
                label: "media",
                type: "ref",
                helpText:
                    "Allowed components: AtomsRichText,MoleculesDetailList,MoleculesGroup,MoleculesHeading",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "moleculesMediaContentSlotText",
                id: "moleculesMediaContentSlotText",
                label: "text",
                type: "ref",
                helpText:
                    "Allowed components: AtomsRichText,MoleculesDetailList,MoleculesGroup,MoleculesHeading",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            ["RICH_TEXT_BLOCKS_MOLECULES_MEDIA_CONTENT"],
            ["moleculesMediaContentReverse"],
            ["moleculesMediaContentAlign"],
            ["moleculesMediaContentValign"],
            ["moleculesMediaContentSlotMedia"],
            ["moleculesMediaContentSlotText"]
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_MENU",
                id: "RICH_TEXT_BLOCKS_MOLECULES_MENU",
                label: "Rich Text Content Of Molecules Menu",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesMenuName",
                id: "moleculesMenuName",
                label: "name",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesMenuSlotDefault",
                id: "moleculesMenuSlotDefault",
                label: "__default__",
                type: "ref",
                helpText: "Allowed components: AtomsDropDown",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
                settings: {
                    models: [
                        {
                            modelId: "AtomsDropDown"
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesMenuSlotTitle",
                id: "moleculesMenuSlotTitle",
                label: "title",
                type: "ref",
                helpText: "Allowed components: AtomsDropDown",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            ["RICH_TEXT_BLOCKS_MOLECULES_MENU"],
            ["moleculesMenuOrientation"],
            ["moleculesMenuId"],
            ["moleculesMenuName"],
            ["moleculesMenuSlotDefault"],
            ["moleculesMenuSlotTitle"]
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_MNEMONIC",
                id: "RICH_TEXT_BLOCKS_MOLECULES_MNEMONIC",
                label: "Rich Text Content Of Molecules Mnemonic",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "moleculesMnemonicSeed",
                id: "moleculesMnemonicSeed",
                label: "seed",
                type: "text",
                multipleValues: true,
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
                multipleValues: false,
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
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "moleculesMnemonicDisabled",
                id: "moleculesMnemonicDisabled",
                label: "disabled",
                type: "boolean",
                multipleValues: false,
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
            ["idMoleculesMnemonic"],
            ["RICH_TEXT_BLOCKS_MOLECULES_MNEMONIC"],
            ["moleculesMnemonicSeed"],
            ["moleculesMnemonicType"],
            ["moleculesMnemonicLength"],
            ["moleculesMnemonicDisabled"]
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_PAGINATION",
                id: "RICH_TEXT_BLOCKS_MOLECULES_PAGINATION",
                label: "Rich Text Content Of Molecules Pagination",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "moleculesPaginationRef",
                id: "moleculesPaginationRef",
                label: "ref",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesPaginationItems",
                id: "moleculesPaginationItems",
                label: "items",
                type: "text",
                multipleValues: true,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesPaginationItemsPerPage",
                id: "moleculesPaginationItemsPerPage",
                label: "itemsPerPage",
                type: "number",
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "moleculesPaginationPageNumber",
                id: "moleculesPaginationPageNumber",
                label: "pageNumber",
                type: "number",
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            }
        ],
        group: {
            id: "molecules",
            name: "Molecules"
        },
        layout: [
            ["idMoleculesPagination"],
            ["RICH_TEXT_BLOCKS_MOLECULES_PAGINATION"],
            ["moleculesPaginationRef"],
            ["moleculesPaginationItems"],
            ["moleculesPaginationItemsPerPage"],
            ["moleculesPaginationPageNumber"]
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_PASSWORD_STRENGTH",
                id: "RICH_TEXT_BLOCKS_MOLECULES_PASSWORD_STRENGTH",
                label: "Rich Text Content Of Molecules Password Strength",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "moleculesPasswordStrengthPassword",
                id: "moleculesPasswordStrengthPassword",
                label: "password",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesPasswordStrengthSlotDefault",
                id: "moleculesPasswordStrengthSlotDefault",
                label: "__default__",
                type: "ref",
                helpText: "Allowed components: AtomsProgressBar",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            ["RICH_TEXT_BLOCKS_MOLECULES_PASSWORD_STRENGTH"],
            ["moleculesPasswordStrengthPassword"],
            ["moleculesPasswordStrengthSlotDefault"]
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_STATISTIC",
                id: "RICH_TEXT_BLOCKS_MOLECULES_STATISTIC",
                label: "Rich Text Content Of Molecules Statistic",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "moleculesStatisticTitle",
                id: "moleculesStatisticTitle",
                label: "title",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesStatisticSlotDefault",
                id: "moleculesStatisticSlotDefault",
                label: "__default__",
                type: "ref",
                helpText: "Allowed components: AtomsChip",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
                settings: {
                    models: [
                        {
                            modelId: "AtomsChip"
                        }
                    ]
                }
            },
            {
                fieldId: "moleculesStatisticSlotIcon",
                id: "moleculesStatisticSlotIcon",
                label: "icon",
                type: "ref",
                helpText: "Allowed components: AtomsChip",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            ["RICH_TEXT_BLOCKS_MOLECULES_STATISTIC"],
            ["moleculesStatisticTitle"],
            ["moleculesStatisticSlotDefault"],
            ["moleculesStatisticSlotIcon"]
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_STEP_LIST",
                id: "RICH_TEXT_BLOCKS_MOLECULES_STEP_LIST",
                label: "Rich Text Content Of Molecules Step List",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
        layout: [
            ["idMoleculesStepList"],
            ["RICH_TEXT_BLOCKS_MOLECULES_STEP_LIST"],
            ["moleculesStepListVariant"]
        ],
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
                fieldId: "RICH_TEXT_BLOCKS_MOLECULES_WORD",
                id: "RICH_TEXT_BLOCKS_MOLECULES_WORD",
                label: "Rich Text Content Of Molecules Word",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "moleculesWordValue",
                id: "moleculesWordValue",
                label: "value",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesWordIndex",
                id: "moleculesWordIndex",
                label: "index",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesWordDisabled",
                id: "moleculesWordDisabled",
                label: "disabled",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "moleculesWordId",
                id: "moleculesWordId",
                label: "id",
                type: "text",
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_MOLECULES_WORD"],
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_ACCORDION",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_ACCORDION",
                label: "Rich Text Content Of Organisms Accordion",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsAccordionMultiselect",
                id: "organismsAccordionMultiselect",
                label: "multiselect",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsAccordionSlotDefault",
                id: "organismsAccordionSlotDefault",
                label: "__default__",
                type: "ref",
                helpText: "Allowed components: MoleculesButton",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            ["RICH_TEXT_BLOCKS_ORGANISMS_ACCORDION"],
            ["organismsAccordionMultiselect"],
            ["organismsAccordionSlotDefault"]
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
            },
            {
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_ACTIONS",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_ACTIONS",
                label: "Rich Text Content Of Organisms Actions",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [["idOrganismsActions"], ["RICH_TEXT_BLOCKS_ORGANISMS_ACTIONS"]],
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_APPS_MENU",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_APPS_MENU",
                label: "Rich Text Content Of Organisms Apps Menu",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsAppsMenuApps",
                id: "organismsAppsMenuApps",
                label: "apps",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsAppsMenuAppName",
                id: "organismsAppsMenuAppName",
                label: "appName",
                type: "text",
                multipleValues: false,
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
            ["idOrganismsAppsMenu"],
            ["RICH_TEXT_BLOCKS_ORGANISMS_APPS_MENU"],
            ["organismsAppsMenuApps"],
            ["organismsAppsMenuAppName"]
        ],
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_CARD",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_CARD",
                label: "Rich Text Content Of Organisms Card",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
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
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsCardDisabled",
                id: "organismsCardDisabled",
                label: "disabled",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsCardOverflow",
                id: "organismsCardOverflow",
                label: "overflow",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsCardSlotDefault",
                id: "organismsCardSlotDefault",
                label: "__default__",
                type: "ref",
                helpText:
                    "Allowed components: AtomsRichText,MoleculesBreadcrumb,MoleculesContent,MoleculesDetailList,MoleculesDisclaimerList,MoleculesHeading,MoleculesMediaContent,MoleculesMnemonic,OrganismsAccordion,OrganismsWizard",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            ["RICH_TEXT_BLOCKS_ORGANISMS_CARD"],
            ["organismsCardVariant"],
            ["organismsCardState"],
            ["organismsCardHref"],
            ["organismsCardDisabled"],
            ["organismsCardOverflow"],
            ["organismsCardSlotDefault"]
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_CATEGORY_MENU",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_CATEGORY_MENU",
                label: "Rich Text Content Of Organisms Category Menu",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsCategoryMenuCategory",
                id: "organismsCategoryMenuCategory",
                label: "category",
                type: "text",
                multipleValues: false,
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
            ["idOrganismsCategoryMenu"],
            ["RICH_TEXT_BLOCKS_ORGANISMS_CATEGORY_MENU"],
            ["organismsCategoryMenuCategory"]
        ],
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_COOKIE_BANNER",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_COOKIE_BANNER",
                label: "Rich Text Content Of Organisms Cookie Banner",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsCookieBannerId",
                id: "organismsCookieBannerId",
                label: "id",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsCookieBannerCookieName",
                id: "organismsCookieBannerCookieName",
                label: "cookieName",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsCookieBannerDarkModeCookieName",
                id: "organismsCookieBannerDarkModeCookieName",
                label: "darkModeCookieName",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsCookieBannerCookieConfig",
                id: "organismsCookieBannerCookieConfig",
                label: "cookieConfig",
                type: "object",
                multipleValues: false,
                renderer: {
                    name: "object"
                },
                settings: {
                    fields: [
                        {
                            id: "expires_15876dec-f933-4d4d-a322-3327a9fcff0d",
                            helpText: "",
                            placeholderText: "Expires",
                            label: "Expires",
                            type: "number",
                            validation: [],
                            fieldId: "expires",
                            renderer: {
                                name: "number-input"
                            }
                        }
                    ],
                    layout: [["expires_15876dec-f933-4d4d-a322-3327a9fcff0d"]]
                }
            },
            {
                fieldId: "organismsCookieBannerAcceptLabel",
                id: "organismsCookieBannerAcceptLabel",
                label: "acceptLabel",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsCookieBannerSettingsLabel",
                id: "organismsCookieBannerSettingsLabel",
                label: "settingsLabel",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsCookieBannerShowBanner",
                id: "organismsCookieBannerShowBanner",
                label: "showBanner",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsCookieBannerShowSettings",
                id: "organismsCookieBannerShowSettings",
                label: "showSettings",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsCookieBannerCloseScrim",
                id: "organismsCookieBannerCloseScrim",
                label: "closeScrim",
                type: "boolean",
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_ORGANISMS_COOKIE_BANNER"],
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_DATUM",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_DATUM",
                label: "Rich Text Content Of Organisms Datum",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsDatumVariant",
                id: "organismsDatumVariant",
                label: "variant",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsDatumDataKey",
                id: "organismsDatumDataKey",
                label: "dataKey",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsDatumHidden",
                id: "organismsDatumHidden",
                label: "hidden",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsDatumColspan",
                id: "organismsDatumColspan",
                label: "colspan",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsDatumId",
                id: "organismsDatumId",
                label: "id",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsDatumSlotDefault",
                id: "organismsDatumSlotDefault",
                label: "__default__",
                type: "ref",
                helpText:
                    "Allowed components: AtomsChip,AtomsLoadingIndicator,AtomsTruncateText,MoleculesHeading",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            ["RICH_TEXT_BLOCKS_ORGANISMS_DATUM"],
            ["organismsDatumVariant"],
            ["organismsDatumDataKey"],
            ["organismsDatumHidden"],
            ["organismsDatumColspan"],
            ["organismsDatumId"],
            ["organismsDatumSlotDefault"]
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_ERROR_BLOCK",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_ERROR_BLOCK",
                label: "Rich Text Content Of Organisms Error Block",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsErrorBlockCode",
                id: "organismsErrorBlockCode",
                label: "code",
                type: "number",
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "organismsErrorBlockMessage",
                id: "organismsErrorBlockMessage",
                label: "message",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsErrorBlockStack",
                id: "organismsErrorBlockStack",
                label: "stack",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsErrorBlockDev",
                id: "organismsErrorBlockDev",
                label: "dev",
                type: "text",
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_ORGANISMS_ERROR_BLOCK"],
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_FOOTER",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_FOOTER",
                label: "Rich Text Content Of Organisms Footer",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsFooterCategories",
                id: "organismsFooterCategories",
                label: "categories",
                type: "text",
                multipleValues: false,
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
            ["idOrganismsFooter"],
            ["RICH_TEXT_BLOCKS_ORGANISMS_FOOTER"],
            ["organismsFooterType"],
            ["organismsFooterSocial"],
            ["organismsFooterCategories"]
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_FORM",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_FORM",
                label: "Rich Text Content Of Organisms Form",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsFormSubmitHandler",
                id: "organismsFormSubmitHandler",
                label: "submitHandler",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsFormSchema",
                id: "organismsFormSchema",
                label: "schema",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsFormFields",
                id: "organismsFormFields",
                label: "fields",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsFormSubmitted",
                id: "organismsFormSubmitted",
                label: "submitted",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsFormSlotDefault",
                id: "organismsFormSlotDefault",
                label: "__default__",
                type: "ref",
                helpText: "Allowed components: MoleculesFileUpload,MoleculesGroup",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            ["RICH_TEXT_BLOCKS_ORGANISMS_FORM"],
            ["organismsFormSubmitHandler"],
            ["organismsFormSchema"],
            ["organismsFormFields"],
            ["organismsFormSubmitted"],
            ["organismsFormSlotDefault"]
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_HERO",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_HERO",
                label: "Rich Text Content Of Organisms Hero",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsHeroSlotCta",
                id: "organismsHeroSlotCta",
                label: "cta",
                type: "ref",
                helpText:
                    "Allowed components: AtomsRichText,MoleculesAlert,MoleculesButton,MoleculesHeading",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "organismsHeroSlotImage",
                id: "organismsHeroSlotImage",
                label: "image",
                type: "ref",
                helpText:
                    "Allowed components: AtomsRichText,MoleculesAlert,MoleculesButton,MoleculesHeading",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "organismsHeroSlotIntroduction",
                id: "organismsHeroSlotIntroduction",
                label: "introduction",
                type: "ref",
                helpText:
                    "Allowed components: AtomsRichText,MoleculesAlert,MoleculesButton,MoleculesHeading",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
        layout: [
            ["idOrganismsHero"],
            ["RICH_TEXT_BLOCKS_ORGANISMS_HERO"],
            ["organismsHeroSlotCta"],
            ["organismsHeroSlotImage"],
            ["organismsHeroSlotIntroduction"]
        ],
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_ITEM",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_ITEM",
                label: "Rich Text Content Of Organisms Item",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsItemId",
                id: "organismsItemId",
                label: "id",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsItemTitle",
                id: "organismsItemTitle",
                label: "title",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsItemExpanded",
                id: "organismsItemExpanded",
                label: "expanded",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsItemDisabled",
                id: "organismsItemDisabled",
                label: "disabled",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsItemRef",
                id: "organismsItemRef",
                label: "ref",
                type: "text",
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_ORGANISMS_ITEM"],
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_LEGAL_MENU",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_LEGAL_MENU",
                label: "Rich Text Content Of Organisms Legal Menu",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsLegalMenuOrientation",
                id: "organismsLegalMenuOrientation",
                label: "orientation",
                type: "text",
                multipleValues: false,
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
            ["idOrganismsLegalMenu"],
            ["RICH_TEXT_BLOCKS_ORGANISMS_LEGAL_MENU"],
            ["organismsLegalMenuOrientation"]
        ],
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_LINKS_MENU",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_LINKS_MENU",
                label: "Rich Text Content Of Organisms Links Menu",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsLinksMenuLinks",
                id: "organismsLinksMenuLinks",
                label: "links",
                type: "text",
                multipleValues: false,
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
            ["idOrganismsLinksMenu"],
            ["RICH_TEXT_BLOCKS_ORGANISMS_LINKS_MENU"],
            ["organismsLinksMenuLinks"]
        ],
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_MAXIMAL",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_MAXIMAL",
                label: "Rich Text Content Of Organisms Maximal",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsMaximalCategories",
                id: "organismsMaximalCategories",
                label: "categories",
                type: "text",
                multipleValues: false,
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
            ["idOrganismsMaximal"],
            ["RICH_TEXT_BLOCKS_ORGANISMS_MAXIMAL"],
            ["organismsMaximalCategories"]
        ],
        titleFieldId: "idOrganismsMaximal"
    }),
    new CmsModelPlugin({
        name: "Organisms Message Banner",
        modelId: "OrganismsMessageBanner",
        description: "",
        fields: [
            {
                fieldId: "idOrganismsMessageBanner",
                id: "idOrganismsMessageBanner",
                label: "Organisms Message Banner Id",
                type: "text",
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_MESSAGE_BANNER",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_MESSAGE_BANNER",
                label: "Rich Text Content Of Organisms Message Banner",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsMessageBannerIcon",
                id: "organismsMessageBannerIcon",
                label: "icon",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsMessageBannerIconSize",
                id: "organismsMessageBannerIconSize",
                label: "iconSize",
                type: "text",
                renderer: {
                    name: "select-box"
                },
                multipleValues: false,
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
                fieldId: "organismsMessageBannerButtonLabel",
                id: "organismsMessageBannerButtonLabel",
                label: "buttonLabel",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsMessageBannerVariant",
                id: "organismsMessageBannerVariant",
                label: "variant",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsMessageBannerShowBanner",
                id: "organismsMessageBannerShowBanner",
                label: "showBanner",
                type: "boolean",
                multipleValues: false,
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
            ["idOrganismsMessageBanner"],
            ["RICH_TEXT_BLOCKS_ORGANISMS_MESSAGE_BANNER"],
            ["organismsMessageBannerIcon"],
            ["organismsMessageBannerIconSize"],
            ["organismsMessageBannerButtonLabel"],
            ["organismsMessageBannerVariant"],
            ["organismsMessageBannerShowBanner"]
        ],
        titleFieldId: "idOrganismsMessageBanner"
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_MINIMAL",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_MINIMAL",
                label: "Rich Text Content Of Organisms Minimal",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsMinimalCopyright",
                id: "organismsMinimalCopyright",
                label: "copyright",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsMinimalSocial",
                id: "organismsMinimalSocial",
                label: "social",
                type: "text",
                multipleValues: false,
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
            ["idOrganismsMinimal"],
            ["RICH_TEXT_BLOCKS_ORGANISMS_MINIMAL"],
            ["organismsMinimalCopyright"],
            ["organismsMinimalSocial"]
        ],
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_NAVBAR",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_NAVBAR",
                label: "Rich Text Content Of Organisms Navbar",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsNavbarTitle",
                id: "organismsNavbarTitle",
                label: "title",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsNavbarApps",
                id: "organismsNavbarApps",
                label: "apps",
                type: "object",
                multipleValues: true,
                renderer: {
                    name: "objects"
                },
                settings: {
                    fields: [
                        {
                            id: "title_b7a7cdf0-b91f-404e-9482-a4f16a9976eb",
                            helpText: "",
                            placeholderText: "Title",
                            label: "Title",
                            type: "text",
                            validation: [],
                            fieldId: "title",
                            renderer: {
                                name: "text-input"
                            }
                        },
                        {
                            id: "url_639cac26-3c51-440c-9abc-378ddcc54740",
                            helpText: "",
                            placeholderText: "Url",
                            label: "Url",
                            type: "text",
                            validation: [],
                            fieldId: "url",
                            renderer: {
                                name: "text-input"
                            }
                        }
                    ],
                    layout: [
                        ["title_b7a7cdf0-b91f-404e-9482-a4f16a9976eb"],
                        ["url_639cac26-3c51-440c-9abc-378ddcc54740"]
                    ]
                }
            },
            {
                fieldId: "organismsNavbarLinks",
                id: "organismsNavbarLinks",
                label: "links",
                type: "object",
                multipleValues: true,
                renderer: {
                    name: "objects"
                },
                settings: {
                    fields: [
                        {
                            id: "title_8b382f8c-9268-4ca8-b27d-b6ab478851df",
                            helpText: "",
                            placeholderText: "Title",
                            label: "Title",
                            type: "text",
                            validation: [],
                            fieldId: "title",
                            renderer: {
                                name: "text-input"
                            }
                        },
                        {
                            id: "url_260bef22-59e4-4667-a76b-a0a8b3c063f1",
                            helpText: "",
                            placeholderText: "Url",
                            label: "Url",
                            type: "text",
                            validation: [],
                            fieldId: "url",
                            renderer: {
                                name: "text-input"
                            }
                        },
                        {
                            id: "icon_df0229f9-fb75-4cad-b539-77f8ae002a4d",
                            helpText: "",
                            placeholderText: "Icon",
                            label: "Icon",
                            type: "text",
                            validation: [],
                            fieldId: "icon",
                            renderer: {
                                name: "text-input"
                            }
                        }
                    ],
                    layout: [
                        ["title_8b382f8c-9268-4ca8-b27d-b6ab478851df"],
                        ["url_260bef22-59e4-4667-a76b-a0a8b3c063f1"],
                        ["icon_df0229f9-fb75-4cad-b539-77f8ae002a4d"]
                    ]
                }
            },
            {
                fieldId: "organismsNavbarAppName",
                id: "organismsNavbarAppName",
                label: "appName",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsNavbarCookieConfig",
                id: "organismsNavbarCookieConfig",
                label: "cookieConfig",
                type: "object",
                multipleValues: false,
                renderer: {
                    name: "object"
                },
                settings: {
                    fields: [
                        {
                            id: "expires_116fbaab-1e7a-41c6-b281-8560fb4a798b",
                            helpText: "",
                            placeholderText: "Expires",
                            label: "Expires",
                            type: "number",
                            validation: [],
                            fieldId: "expires",
                            renderer: {
                                name: "number-input"
                            }
                        }
                    ],
                    layout: [["expires_116fbaab-1e7a-41c6-b281-8560fb4a798b"]]
                }
            },
            {
                fieldId: "organismsNavbarId",
                id: "organismsNavbarId",
                label: "id",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsNavbarSlotA11y",
                id: "organismsNavbarSlotA11y",
                label: "a11y",
                type: "ref",
                helpText: "Allowed components: AtomsLogo,MoleculesMenu",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "organismsNavbarSlotApps",
                id: "organismsNavbarSlotApps",
                label: "apps",
                type: "ref",
                helpText: "Allowed components: AtomsLogo,MoleculesMenu",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "organismsNavbarSlotLinks",
                id: "organismsNavbarSlotLinks",
                label: "links",
                type: "ref",
                helpText: "Allowed components: AtomsLogo,MoleculesMenu",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "organismsNavbarSlotLogo",
                id: "organismsNavbarSlotLogo",
                label: "logo",
                type: "ref",
                helpText: "Allowed components: AtomsLogo,MoleculesMenu",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "organismsNavbarSlotNavigation",
                id: "organismsNavbarSlotNavigation",
                label: "navigation",
                type: "ref",
                helpText: "Allowed components: AtomsLogo,MoleculesMenu",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "organismsNavbarSlotNetworks",
                id: "organismsNavbarSlotNetworks",
                label: "networks",
                type: "ref",
                helpText: "Allowed components: AtomsLogo,MoleculesMenu",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            ["RICH_TEXT_BLOCKS_ORGANISMS_NAVBAR"],
            ["organismsNavbarTitle"],
            ["organismsNavbarApps"],
            ["organismsNavbarLinks"],
            ["organismsNavbarAppName"],
            ["organismsNavbarCookieConfig"],
            ["organismsNavbarId"],
            ["organismsNavbarSlotA11y"],
            ["organismsNavbarSlotApps"],
            ["organismsNavbarSlotLinks"],
            ["organismsNavbarSlotLogo"],
            ["organismsNavbarSlotNavigation"],
            ["organismsNavbarSlotNetworks"]
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
            },
            {
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_NEWSLETTER",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_NEWSLETTER",
                label: "Rich Text Content Of Organisms Newsletter",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [["idOrganismsNewsletter"], ["RICH_TEXT_BLOCKS_ORGANISMS_NEWSLETTER"]],
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_ROW",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_ROW",
                label: "Rich Text Content Of Organisms Row",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsRowType",
                id: "organismsRowType",
                label: "type",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsRowHidden",
                id: "organismsRowHidden",
                label: "hidden",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsRowVariant",
                id: "organismsRowVariant",
                label: "variant",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsRowId",
                id: "organismsRowId",
                label: "id",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsRowData",
                id: "organismsRowData",
                label: "data",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsRowInfo",
                id: "organismsRowInfo",
                label: "info",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsRowActive",
                id: "organismsRowActive",
                label: "active",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsRowSlotDefault",
                id: "organismsRowSlotDefault",
                label: "__default__",
                type: "ref",
                helpText: "Allowed components: OrganismsDatum",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            ["RICH_TEXT_BLOCKS_ORGANISMS_ROW"],
            ["organismsRowType"],
            ["organismsRowHidden"],
            ["organismsRowVariant"],
            ["organismsRowId"],
            ["organismsRowData"],
            ["organismsRowInfo"],
            ["organismsRowActive"],
            ["organismsRowSlotDefault"]
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_SEARCH_LIST",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_SEARCH_LIST",
                label: "Rich Text Content Of Organisms Search List",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsSearchListData",
                id: "organismsSearchListData",
                label: "data",
                type: "text",
                multipleValues: true,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsSearchListFieldButton",
                id: "organismsSearchListFieldButton",
                label: "fieldButton",
                type: "boolean",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                fieldId: "organismsSearchListDataSearchResults",
                id: "organismsSearchListDataSearchResults",
                label: "dataSearchResults",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsSearchListSlotDefault",
                id: "organismsSearchListSlotDefault",
                label: "__default__",
                type: "ref",
                helpText: "Allowed components: MoleculesControl,MoleculesDetailList",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            ["RICH_TEXT_BLOCKS_ORGANISMS_SEARCH_LIST"],
            ["organismsSearchListData"],
            ["organismsSearchListFieldButton"],
            ["organismsSearchListDataSearchResults"],
            ["organismsSearchListSlotDefault"]
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_SOCIAL_MEDIA_MENU",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_SOCIAL_MEDIA_MENU",
                label: "Rich Text Content Of Organisms Social Media Menu",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsSocialMediaMenuOrientation",
                id: "organismsSocialMediaMenuOrientation",
                label: "orientation",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsSocialMediaMenuSocial",
                id: "organismsSocialMediaMenuSocial",
                label: "social",
                type: "text",
                multipleValues: false,
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
            ["idOrganismsSocialMediaMenu"],
            ["RICH_TEXT_BLOCKS_ORGANISMS_SOCIAL_MEDIA_MENU"],
            ["organismsSocialMediaMenuOrientation"],
            ["organismsSocialMediaMenuSocial"]
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_STEP",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_STEP",
                label: "Rich Text Content Of Organisms Step",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsStepNumber",
                id: "organismsStepNumber",
                label: "number",
                type: "number",
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            }
        ],
        group: {
            id: "organisms",
            name: "Organisms"
        },
        layout: [["idOrganismsStep"], ["RICH_TEXT_BLOCKS_ORGANISMS_STEP"], ["organismsStepNumber"]],
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_TABLE",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_TABLE",
                label: "Rich Text Content Of Organisms Table",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsTableData",
                id: "organismsTableData",
                label: "data",
                type: "text",
                multipleValues: true,
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
                multipleValues: false,
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
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "organismsTableDataRows",
                id: "organismsTableDataRows",
                label: "dataRows",
                type: "text",
                multipleValues: false,
                renderer: {
                    name: "text-input"
                }
            },
            {
                fieldId: "organismsTableSlotDefault",
                id: "organismsTableSlotDefault",
                label: "__default__",
                type: "ref",
                helpText: "Allowed components: AtomsDropDown,MoleculesPagination",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "organismsTableSlotActions",
                id: "organismsTableSlotActions",
                label: "actions",
                type: "ref",
                helpText: "Allowed components: AtomsDropDown,MoleculesPagination",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "organismsTableSlotFoot",
                id: "organismsTableSlotFoot",
                label: "foot",
                type: "ref",
                helpText: "Allowed components: AtomsDropDown,MoleculesPagination",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "organismsTableSlotHead",
                id: "organismsTableSlotHead",
                label: "head",
                type: "ref",
                helpText: "Allowed components: AtomsDropDown,MoleculesPagination",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "organismsTableSlotTitle",
                id: "organismsTableSlotTitle",
                label: "title",
                type: "ref",
                helpText: "Allowed components: AtomsDropDown,MoleculesPagination",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            ["RICH_TEXT_BLOCKS_ORGANISMS_TABLE"],
            ["organismsTableData"],
            ["organismsTableMobileBreakpoint"],
            ["organismsTableDuration"],
            ["organismsTableDataRows"],
            ["organismsTableSlotDefault"],
            ["organismsTableSlotActions"],
            ["organismsTableSlotFoot"],
            ["organismsTableSlotHead"],
            ["organismsTableSlotTitle"]
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
                fieldId: "RICH_TEXT_BLOCKS_ORGANISMS_WIZARD",
                id: "RICH_TEXT_BLOCKS_ORGANISMS_WIZARD",
                label: "Rich Text Content Of Organisms Wizard",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
                }
            },
            {
                fieldId: "organismsWizardStepCount",
                id: "organismsWizardStepCount",
                label: "stepCount",
                type: "number",
                multipleValues: false,
                renderer: {
                    name: "number-input"
                }
            },
            {
                fieldId: "organismsWizardSlotDefault",
                id: "organismsWizardSlotDefault",
                label: "__default__",
                type: "ref",
                helpText: "Allowed components: AtomsProgressBar,MoleculesBreadcrumb,OrganismsForm",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "organismsWizardSlotProgressBar",
                id: "organismsWizardSlotProgressBar",
                label: "progress-bar",
                type: "ref",
                helpText: "Allowed components: AtomsProgressBar,MoleculesBreadcrumb,OrganismsForm",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
            },
            {
                fieldId: "organismsWizardSlotTitle",
                id: "organismsWizardSlotTitle",
                label: "title",
                type: "ref",
                helpText: "Allowed components: AtomsProgressBar,MoleculesBreadcrumb,OrganismsForm",
                multipleValues: false,
                renderer: {
                    name: "ref-input"
                },
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
        layout: [
            ["idOrganismsWizard"],
            ["RICH_TEXT_BLOCKS_ORGANISMS_WIZARD"],
            ["organismsWizardStepCount"],
            ["organismsWizardSlotDefault"],
            ["organismsWizardSlotProgressBar"],
            ["organismsWizardSlotTitle"]
        ],
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
                fieldId: "RICH_TEXT_BLOCKS_TEMPLATES_BUY_HOMEPAGE",
                id: "RICH_TEXT_BLOCKS_TEMPLATES_BUY_HOMEPAGE",
                label: "Rich Text Content Of Templates Buy Homepage",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_TEMPLATES_BUY_HOMEPAGE"],
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
                fieldId: "RICH_TEXT_BLOCKS_TEMPLATES_DEFAULT",
                id: "RICH_TEXT_BLOCKS_TEMPLATES_DEFAULT",
                label: "Rich Text Content Of Templates Default",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_TEMPLATES_DEFAULT"],
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
                fieldId: "RICH_TEXT_BLOCKS_TEMPLATES_DEVOPS_CENTERED",
                id: "RICH_TEXT_BLOCKS_TEMPLATES_DEVOPS_CENTERED",
                label: "Rich Text Content Of Templates Devops Centered",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_TEMPLATES_DEVOPS_CENTERED"],
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
                fieldId: "RICH_TEXT_BLOCKS_TEMPLATES_DEVOPS_DASHBOARD",
                id: "RICH_TEXT_BLOCKS_TEMPLATES_DEVOPS_DASHBOARD",
                label: "Rich Text Content Of Templates Devops Dashboard",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_TEMPLATES_DEVOPS_DASHBOARD"],
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
                fieldId: "RICH_TEXT_BLOCKS_TEMPLATES_EXPLORER_CHARTS",
                id: "RICH_TEXT_BLOCKS_TEMPLATES_EXPLORER_CHARTS",
                label: "Rich Text Content Of Templates Explorer Charts",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_TEMPLATES_EXPLORER_CHARTS"],
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
                fieldId: "RICH_TEXT_BLOCKS_TEMPLATES_EXPLORER_DETAIL",
                id: "RICH_TEXT_BLOCKS_TEMPLATES_EXPLORER_DETAIL",
                label: "Rich Text Content Of Templates Explorer Detail",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_TEMPLATES_EXPLORER_DETAIL"],
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
                fieldId: "RICH_TEXT_BLOCKS_TEMPLATES_EXPLORER_HOMEPAGE",
                id: "RICH_TEXT_BLOCKS_TEMPLATES_EXPLORER_HOMEPAGE",
                label: "Rich Text Content Of Templates Explorer Homepage",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_TEMPLATES_EXPLORER_HOMEPAGE"],
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
                fieldId: "RICH_TEXT_BLOCKS_TEMPLATES_EXPLORER_LIST",
                id: "RICH_TEXT_BLOCKS_TEMPLATES_EXPLORER_LIST",
                label: "Rich Text Content Of Templates Explorer List",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_TEMPLATES_EXPLORER_LIST"],
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
                fieldId: "RICH_TEXT_BLOCKS_TEMPLATES_EXTENSION_DEFAULT",
                id: "RICH_TEXT_BLOCKS_TEMPLATES_EXTENSION_DEFAULT",
                label: "Rich Text Content Of Templates Extension Default",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_TEMPLATES_EXTENSION_DEFAULT"],
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
                fieldId: "RICH_TEXT_BLOCKS_TEMPLATES_WALLET_DASHBOARD",
                id: "RICH_TEXT_BLOCKS_TEMPLATES_WALLET_DASHBOARD",
                label: "Rich Text Content Of Templates Wallet Dashboard",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_TEMPLATES_WALLET_DASHBOARD"],
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
                fieldId: "RICH_TEXT_BLOCKS_TEMPLATES_WALLET_HOMEPAGE",
                id: "RICH_TEXT_BLOCKS_TEMPLATES_WALLET_HOMEPAGE",
                label: "Rich Text Content Of Templates Wallet Homepage",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_TEMPLATES_WALLET_HOMEPAGE"],
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
                fieldId: "RICH_TEXT_BLOCKS_TEMPLATES_WALLET_OPTION",
                id: "RICH_TEXT_BLOCKS_TEMPLATES_WALLET_OPTION",
                label: "Rich Text Content Of Templates Wallet Option",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_TEMPLATES_WALLET_OPTION"],
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
                fieldId: "RICH_TEXT_BLOCKS_TEMPLATES_WALLET_WIZARD",
                id: "RICH_TEXT_BLOCKS_TEMPLATES_WALLET_WIZARD",
                label: "Rich Text Content Of Templates Wallet Wizard",
                type: "rich-text",
                multipleValues: true,
                helpText: "Add any number of rich text blocks for every component",
                renderer: {
                    name: "rich-text-inputs"
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
                multipleValues: false,
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
                multipleValues: false,
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
            ["RICH_TEXT_BLOCKS_TEMPLATES_WALLET_WIZARD"],
            ["templatesWalletWizardIsLoading"],
            ["templatesWalletWizardIsError"]
        ],
        titleFieldId: "idTemplatesWalletWizard"
    }),
    new CmsModelPlugin({
        name: "DuskPageModel",
        titleFieldId: "duskPageTitle",
        description: "Dusk Website page model",
        group: {
            id: "pages",
            name: "Pages"
        },
        modelId: "DuskPageModel",
        fields: [
            {
                fieldId: "duskPageTitle",
                id: "duskPageTitle",
                label: "Page title",
                type: "text",
                helpText: "Web page title",
                multipleValues: false,
                placeholderText: "Dusk web page",
                renderer: {
                    name: "text-input"
                },
                validation: [
                    {
                        name: "required",
                        message: "Page title is required"
                    }
                ]
            },
            {
                fieldId: "duskPageDescription",
                id: "duskPageDescription",
                label: "Page description",
                type: "long-text",
                helpText: "Page description for meta tags",
                multipleValues: false,
                placeholderText: "Dusk web page",
                renderer: {
                    name: "long-text-text-area"
                }
            },
            {
                fieldId: "duskPagePath",
                id: "duskPagePath",
                label: "Webpage path",
                type: "text",
                helpText: "Page path without hostname",
                multipleValues: false,
                placeholderText: "ex: /wallet/info",
                renderer: {
                    name: "text-input"
                },
                validation: [
                    {
                        name: "unique",
                        message: "Page ID must be unique!"
                    }
                ]
            },
            {
                fieldId: "duskPageEnabled",
                id: "duskPageEnabled",
                label: "Page active",
                type: "boolean",
                helpText: "Whether page is ready to be used or not",
                multipleValues: false,
                renderer: {
                    name: "boolean-input"
                }
            },
            {
                id: "duskPageUIKitComponents",
                fieldId: "duskPageUIKitComponents",
                label: "Select as many UI Kit components you need to build the page",
                type: "ref",
                multipleValues: true,
                renderer: {
                    name: "ref-inputs"
                },
                settings: {
                    models: [
                        {
                            modelId: "AtomsAddress"
                        },
                        {
                            modelId: "AtomsBalance"
                        },
                        {
                            modelId: "AtomsChip"
                        },
                        {
                            modelId: "AtomsDateText"
                        },
                        {
                            modelId: "AtomsDropDown"
                        },
                        {
                            modelId: "AtomsGauge"
                        },
                        {
                            modelId: "AtomsIcon"
                        },
                        {
                            modelId: "AtomsLoadingIndicator"
                        },
                        {
                            modelId: "AtomsLogo"
                        },
                        {
                            modelId: "AtomsProgressBar"
                        },
                        {
                            modelId: "AtomsQrCode"
                        },
                        {
                            modelId: "AtomsRichText"
                        },
                        {
                            modelId: "AtomsSkeletonLoader"
                        },
                        {
                            modelId: "AtomsSlider"
                        },
                        {
                            modelId: "AtomsTextField"
                        },
                        {
                            modelId: "AtomsToggle"
                        },
                        {
                            modelId: "AtomsTruncateText"
                        },
                        {
                            modelId: "MoleculesAlert"
                        },
                        {
                            modelId: "MoleculesBreadcrumb"
                        },
                        {
                            modelId: "MoleculesButton"
                        },
                        {
                            modelId: "MoleculesChart"
                        },
                        {
                            modelId: "MoleculesContent"
                        },
                        {
                            modelId: "MoleculesControl"
                        },
                        {
                            modelId: "MoleculesCtaList"
                        },
                        {
                            modelId: "MoleculesDetailList"
                        },
                        {
                            modelId: "MoleculesDisclaimerList"
                        },
                        {
                            modelId: "MoleculesFileUpload"
                        },
                        {
                            modelId: "MoleculesGroup"
                        },
                        {
                            modelId: "MoleculesHeading"
                        },
                        {
                            modelId: "MoleculesItem"
                        },
                        {
                            modelId: "MoleculesLabel"
                        },
                        {
                            modelId: "MoleculesMediaContent"
                        },
                        {
                            modelId: "MoleculesMenu"
                        },
                        {
                            modelId: "MoleculesMnemonic"
                        },
                        {
                            modelId: "MoleculesPagination"
                        },
                        {
                            modelId: "MoleculesPasswordStrength"
                        },
                        {
                            modelId: "MoleculesStatistic"
                        },
                        {
                            modelId: "MoleculesStepList"
                        },
                        {
                            modelId: "MoleculesWord"
                        },
                        {
                            modelId: "OrganismsAccordion"
                        },
                        {
                            modelId: "OrganismsActions"
                        },
                        {
                            modelId: "OrganismsAppsMenu"
                        },
                        {
                            modelId: "OrganismsCard"
                        },
                        {
                            modelId: "OrganismsCategoryMenu"
                        },
                        {
                            modelId: "OrganismsCookieBanner"
                        },
                        {
                            modelId: "OrganismsDatum"
                        },
                        {
                            modelId: "OrganismsErrorBlock"
                        },
                        {
                            modelId: "OrganismsFooter"
                        },
                        {
                            modelId: "OrganismsForm"
                        },
                        {
                            modelId: "OrganismsHero"
                        },
                        {
                            modelId: "OrganismsItem"
                        },
                        {
                            modelId: "OrganismsLegalMenu"
                        },
                        {
                            modelId: "OrganismsLinksMenu"
                        },
                        {
                            modelId: "OrganismsMaximal"
                        },
                        {
                            modelId: "OrganismsMessageBanner"
                        },
                        {
                            modelId: "OrganismsMinimal"
                        },
                        {
                            modelId: "OrganismsNavbar"
                        },
                        {
                            modelId: "OrganismsNewsletter"
                        },
                        {
                            modelId: "OrganismsRow"
                        },
                        {
                            modelId: "OrganismsSearchList"
                        },
                        {
                            modelId: "OrganismsSocialMediaMenu"
                        },
                        {
                            modelId: "OrganismsStep"
                        },
                        {
                            modelId: "OrganismsTable"
                        },
                        {
                            modelId: "OrganismsWizard"
                        }
                    ]
                }
            }
        ],
        layout: [
            ["duskPageTitle"],
            ["duskPageDescription"],
            ["duskPagePath"],
            ["duskPageEnabled"],
            ["duskPageUIKitComponents"]
        ]
    })
];

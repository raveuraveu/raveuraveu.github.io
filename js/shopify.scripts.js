(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    
    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }


    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'e42e5b-4.myshopify.com',
            storefrontAccessToken: '11f190ba6fcbb28077050cf2f9b62dfc',
        });


        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '8382828511496',
                node: document.getElementById('product-component-1704664928394'),
                moneyFormat: '%7B%7Bamount_no_decimals_with_comma_separator%7D%7D%20Ft',
                options: {
                    "product": {
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                }
                            },
                            "button": {
                                "border-radius": "0px",
                                "background-color": "#de3b0b",
                                ":hover": {
                                    "background-color": "#c8350a"
                                },
                                ":focus": {
                                    "background-color": "#c8350a"
                                },
                                "font-family": "Montserrat, sans-serif"
                            },
                            "title": {
                                "color": "#FFFFFF",
                                "font-size":"30px",
                            },
                            "price": {
                                "color": "#FFFFFF",
                                "font-family": "Montserrat, sans-serif"
                            },
                            "compareAt": {
                                "color": "#FFFFFF",
                                "font-family": "Montserrat, sans-serif"
                            },
                            "unitPrice": {
                                "color": "#FFFFFF",
                                "font-family": "Montserrat, sans-serif"
                            }
                        },
                        "width": "580px",
                        "text": {
                            "button": "Add to cart"
                        },
                        "googleFonts": [
                            "Montserrat"
                        ]
                    },
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            "button": {
                                "border-radius": "0px",
                                "background-color": "#de3b0b",
                                ":hover": {
                                    "background-color": "#c8350a"
                                },
                                ":focus": {
                                    "background-color": "#c8350a"
                                },
                                "font-family": "Montserrat, sans-serif"
                            }
                        },
                        "googleFonts": [
                            "Montserrat"
                        ]
                    },
                    "option": {
                        "styles": {
                            "label": {
                                "font-family": "Montserrat, sans-serif",
                                "color": "#FFFFFF"
                            },
                            "select": {
                                "font-family": "Montserrat, sans-serif"
                            }
                        },
                        "googleFonts": [
                            "Montserrat"
                        ]
                    },
                    "cart": {
                        "styles": {
                            "button": {
                                "border-radius": "0px",
                                "background-color": "#de3b0b",
                                ":hover": {
                                    "background-color": "#c8350a"
                                },
                                ":focus": {
                                    "background-color": "#c8350a"
                                },
                                "font-family": "Montserrat, sans-serif"
                            },
                            "cart": {
                                "background-color": "#000000"
                            },
                            "footer": {
                                "background-color": "#000000"
                            },
                            "title": {
                                "color": "#ffffff"
                            },
                            "header": {
                                "color": "#ffffff"
                            },
                            "lineItems": {
                                "color": "#ffffff"
                            },
                            "subtotalText": {
                                "color": "#ffffff"
                            },
                            "subtotal": {
                                "color": "#ffffff"
                            },
                            "notice": {
                                "color": "#ffffff"
                            },
                            "currency": {
                                "color": "#ffffff"
                            },
                            "close": {
                                "color": "#ffffff",
                                ":hover": {
                                    "color": "#ffffff"
                                }
                            },
                            "empty": {
                                "color": "#ffffff"
                            },
                            "noteDescription": {
                                "color": "#ffffff"
                            },
                            "discountText": {
                                "color": "#ffffff"
                            },
                            "discountIcon": {
                                "fill": "#ffffff"
                            },
                            "discountAmount": {
                                "color": "#ffffff"
                            }
                        },
                        "googleFonts": [
                            "Montserrat"
                        ]
                    },
                    "toggle": {
                        "styles": {
                            "toggle": {
                                "background-color": "#de3b0b",
                                ":hover": {
                                    "background-color": "#c8350a"
                                },
                                ":focus": {
                                    "background-color": "#c8350a"
                                },
                                "font-family": "Montserrat, sans-serif"
                            }
                        },
                        "googleFonts": [
                            "Montserrat"
                        ]
                    },
                    "lineItem": {
                        "styles": {
                            "variantTitle": {
                                "color": "#ffffff"
                            },
                            "title": {
                                "color": "#ffffff"
                            },
                            "price": {
                                "color": "#ffffff"
                            },
                            "fullPrice": {
                                "color": "#ffffff"
                            },
                            "discount": {
                                "color": "#ffffff"
                            },
                            "discountIcon": {
                                "fill": "#ffffff"
                            },
                            "quantity": {
                                "color": "#ffffff"
                            },
                            "quantityIncrement": {
                                "color": "#ffffff",
                                "border-color": "#ffffff"
                            },
                            "quantityDecrement": {
                                "color": "#ffffff",
                                "border-color": "#ffffff"
                            },
                            "quantityInput": {
                                "color": "#ffffff",
                                "border-color": "#ffffff"
                            }
                        }
                    }
                },
            });
        });


        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '8342306619656',
                node: document.getElementById('product-component-1698077404811'),
                moneyFormat: '%7B%7Bamount_no_decimals_with_comma_separator%7D%7D%20Ft',
                options: {
                    "product": {
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                }
                            },
                            "button": {
                                "border-radius": "0px",
                                "background-color": "#de3b0b",
                                ":hover": {
                                    "background-color": "#c8350a"
                                },
                                ":focus": {
                                    "background-color": "#c8350a"
                                },
                                "font-family": "Montserrat, sans-serif"
                            },
                            "title": {
                                "color": "#FFFFFF",
                                "font-size":"30px",
                            },
                            "price": {
                                "color": "#FFFFFF",
                                "font-family": "Montserrat, sans-serif"
                            },
                            "compareAt": {
                                "color": "#FFFFFF",
                                "font-family": "Montserrat, sans-serif"
                            },
                            "unitPrice": {
                                "color": "#FFFFFF",
                                "font-family": "Montserrat, sans-serif"
                            }
                        },
                        "width": "580px",
                        "text": {
                            "button": "Add to cart"
                        },
                        "googleFonts": [
                            "Montserrat"
                        ]
                    },
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            "button": {
                                "border-radius": "0px",
                                "background-color": "#de3b0b",
                                ":hover": {
                                    "background-color": "#c8350a"
                                },
                                ":focus": {
                                    "background-color": "#c8350a"
                                },
                                "font-family": "Montserrat, sans-serif"
                            }
                        },
                        "googleFonts": [
                            "Montserrat"
                        ]
                    },
                    "option": {
                        "styles": {
                            "label": {
                                "font-family": "Montserrat, sans-serif",
                                "color": "#FFFFFF"
                            },
                            "select": {
                                "font-family": "Montserrat, sans-serif"
                            }
                        },
                        "googleFonts": [
                            "Montserrat"
                        ]
                    },
                    "cart": {
                        "styles": {
                            "button": {
                                "border-radius": "0px",
                                "background-color": "#de3b0b",
                                ":hover": {
                                    "background-color": "#c8350a"
                                },
                                ":focus": {
                                    "background-color": "#c8350a"
                                },
                                "font-family": "Montserrat, sans-serif"
                            },
                            "cart": {
                                "background-color": "#000000"
                            },
                            "footer": {
                                "background-color": "#000000"
                            },
                            "title": {
                                "color": "#ffffff"
                            },
                            "header": {
                                "color": "#ffffff"
                            },
                            "lineItems": {
                                "color": "#ffffff"
                            },
                            "subtotalText": {
                                "color": "#ffffff"
                            },
                            "subtotal": {
                                "color": "#ffffff"
                            },
                            "notice": {
                                "color": "#ffffff"
                            },
                            "currency": {
                                "color": "#ffffff"
                            },
                            "close": {
                                "color": "#ffffff",
                                ":hover": {
                                    "color": "#ffffff"
                                }
                            },
                            "empty": {
                                "color": "#ffffff"
                            },
                            "noteDescription": {
                                "color": "#ffffff"
                            },
                            "discountText": {
                                "color": "#ffffff"
                            },
                            "discountIcon": {
                                "fill": "#ffffff"
                            },
                            "discountAmount": {
                                "color": "#ffffff"
                            }
                        },
                        "googleFonts": [
                            "Montserrat"
                        ]
                    },
                    "toggle": {
                        "styles": {
                            "toggle": {
                                "background-color": "#de3b0b",
                                ":hover": {
                                    "background-color": "#c8350a"
                                },
                                ":focus": {
                                    "background-color": "#c8350a"
                                },
                                "font-family": "Montserrat, sans-serif"
                            }
                        },
                        "googleFonts": [
                            "Montserrat"
                        ]
                    },
                    "lineItem": {
                        "styles": {
                            "variantTitle": {
                                "color": "#ffffff"
                            },
                            "title": {
                                "color": "#ffffff"
                            },
                            "price": {
                                "color": "#ffffff"
                            },
                            "fullPrice": {
                                "color": "#ffffff"
                            },
                            "discount": {
                                "color": "#ffffff"
                            },
                            "discountIcon": {
                                "fill": "#ffffff"
                            },
                            "quantity": {
                                "color": "#ffffff"
                            },
                            "quantityIncrement": {
                                "color": "#ffffff",
                                "border-color": "#ffffff"
                            },
                            "quantityDecrement": {
                                "color": "#ffffff",
                                "border-color": "#ffffff"
                            },
                            "quantityInput": {
                                "color": "#ffffff",
                                "border-color": "#ffffff"
                            }
                        }
                    }
                },
            });
        });
    }
})();

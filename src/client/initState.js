export const initState = {
  app_data: {
    shop_plan: "",
    app_plan: "",
    page: 1,
    name: "Top Banner",
    sidebaLeft: {
      message: false,
      policy: false,
      confirm: false,
      button: false,
      cookieIcon: false,
      showAll: false,
    },
    dataSetting: {
      name: "",
      created_at: "",
      updated_at: "",
      enable: true,
      content: {
        justTell: true,
        askUsers: false,
        language: "english",
        message: {
          show: true,
          content:
            "We use cookie to improve your experience on our site. By using our site you consent cookies.",
        },
        policy: {
          ownPolicy: {
            show: false,
            url: "https://elfsight.com",
            text: "Learn More",
          },
        },
        button: {
          confirmButton: {
            show: true,
            text: "Ok",
          },
          buttons: {
            show: false,
            allowText: "Allow Cookies",
            declineText: "Decline",
          },
        },
        cookie: {
          show: true,
          default: true,
          custome: "",
        },
      },
      layout: {
        top: true,
        bottom: false,
        leftFloat: false,
        centerFloat: false,
        rightFloat: false,
      },
      style: {
        color: {
          backgroundColor: "rgb(3, 26, 78)",
          textColor: "rgb(255, 255, 255)",
          linkColor: "rgb(255, 255, 255)",
          confirmButtonColor: "rgb(255, 255, 255)",
        },
        font: {
          fontsize: "13",
        },
      },
    },
  },
  app_settings: {
    wishlist_settings: {
      wishlist_enable: true,
      wishlist_product_number: 2,
      wishlist_add_class: ".add-to-wishlist, .add-product-wishlist",
      wishlist_show_class: ".show-wishlist",
    },
    compare_settings: {
      compare_enable: true,
      compare_product_number: 2,
      compare_add_class: ".add-to-compare, .add-product-compare",
      compare_show_class: ".show-compare",
      compare_options: [
        "vendor",
        "collection",
        "options",
        "availability",
        "rating",
      ],
    },
  },
};

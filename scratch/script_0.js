<script>
    window.lazySizesConfig = window.lazySizesConfig || {};
    lazySizesConfig.loadMode = 1;
    window.lazySizesConfig.init = false;
    lazySizes.init();

    window.rtl_slick = false;
    window.mobile_menu = 'default';
    
        window.money_format = '<span class=glc-money>Rs.{{amount}}</span>';
    
    window.shop_currency = 'INR';
    window.currencySymbol ="₹";
    window.show_multiple_currencies = false;
    window.routes = {
        root: '',
        cart: '/cart',
        cart_add_url: '/cart/add',
        cart_change_url: '/cart/change',
        cart_update_url: '/cart/update',
        collection_all: '/collections/all',
        predictive_search_url: '/search/suggest',
        search_url: '/search'
    }; 
    window.button_load_more = {
        default: `Show more`,
        loading: `Loading...`,
        view_all: `View All Collection`,
        no_more: `No More Product`,
        no_more_collection: `No More Collection`
    };
    window.after_add_to_cart = {
        type: 'quick_cart',
        message: `is added to your shopping cart.`,
        message_2: `Product added to cart successfully`
    };
    window.variant_image_group_quick_view = false;
    window.quick_view = {
        show: true,
        show_mb: true
    };
    window.quick_shop = {
        show: true,
        see_details: `View Full Details`,
    };
    window.quick_cart = {
        show: false
    };
    window.cartStrings = {
        error: `There was an error while updating your cart. Please try again.`,
        quantityError: `You can only add [quantity] of this item to your cart.`,
        addProductOutQuantity: `You can only add [maxQuantity] of this product to your cart`,
        addProductOutQuantity2: `The quantity of this product is insufficient.`,
        cartErrorMessage: `Translation missing: en.sections.cart.cart_quantity_error_prefix`,
        soldoutText: `sold out`,
        alreadyText: `all`,
        items: `items`,
        item: `item`,
    };
    window.variantStrings = {
        addToCart: `Add to cart`,
        addingToCart: `Adding to cart...`,
        addedToCart: `Added to cart`,
        submit: `Submit`,
        soldOut: `Sold out`,
        unavailable: `Unavailable`,
        soldOut_message: `This variant is sold out!`,
        unavailable_message: `This variant is unavailable!`,
        addToCart_message: `You must select at least one products to add!`,
        select: `Select Options`,
        preOrder: `Pre-Order`,
        add: `Add`,
        unavailable_with_option: `[value] (Unavailable)`,
        hide_variants_unavailable: true
    };
    window.inventory_text = {
        hotStock: `Hurry up! only [inventory] left`,
        hotStock2: `Please hurry! Only [inventory] left in stock`,
        warningQuantity: `Maximum quantity: [inventory]`,
        inStock: `In Stock`,
        outOfStock: `Out Of Stock`,
        manyInStock: `Many In Stock`,
        show_options: `Show Variants`,
        hide_options: `Hide Variants`,
        adding : `Adding`,
        thank_you : `Thank You`,
        add_more : `Add More`,
        cart_feedback : `Added`
    };
    
        
            window.free_shipping_price = 800;
        
        window.free_shipping_text = {
            free_shipping_message: `Free shipping for all orders over`,
            free_shipping_message_1: `You qualify for free shipping!`,
            free_shipping_message_2:`Only`,
            free_shipping_message_3: `away from`,
            free_shipping_message_4: `free shipping`,
            free_shipping_1: `Free`,
            free_shipping_2: `TBD`
        };
    
    
        window.notify_me = {
            show: true,
            mail: `example@domain.com`,
            subject: `Out Of Stock Notification from Halothemes Store`,
            label: `Shopify`,
            success: `Thanks! We&#39;ve received your request and will respond shortly when this product / variant becomes available!`,
            error: `Please use a valid email address, such as john@example.com.`,
            button: `Notify me`
        };
    
    
    window.compare = {
        show: false,
        add: `Add To Compare`,
        added: `Added To Compare`,
        message: `You must select at least two products to compare!`
    };
    window.wishlist = {
        show: true,
        add: `Add to wishlist`,
        added: `Added to wishlist`,
        empty: `No product is added to your wishlist`,
        continue_shopping: `Continue Shopping`
    };
    window.pagination = {
        style: 2,
        next: `Next`,
        prev: `Prev`
    }
    window.countdown = {
        text: `Limited-Time Offers, End in:`,
        day: `D`,
        hour: `H`,
        min: `M`,
        sec: `S`,
        day_2: `Days`,
        hour_2: `Hours`,
        min_2: `Mins`,
        sec_2: `Secs`,
        days: `Days`,
        hours: `Hours`,
        mins: `Mins`,
        secs: `Secs`,
        d: `d`,
        h: `h`,
        m: `m`,
        s: `s`
    };
    window.customer_view = {
        text: `[number] customers are viewing this product`
    };

    
        window.arrows = {
            icon_next: `<button type="button" class="slick-next" aria-label="Next" role="button"><svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 7.75 1.34375 L 6.25 2.65625 L 14.65625 12 L 6.25 21.34375 L 7.75 22.65625 L 16.75 12.65625 L 17.34375 12 L 16.75 11.34375 Z"></path></svg></button>`,
            icon_prev: `<button type="button" class="slick-prev" aria-label="Previous" role="button"><svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 7.75 1.34375 L 6.25 2.65625 L 14.65625 12 L 6.25 21.34375 L 7.75 22.65625 L 16.75 12.65625 L 17.34375 12 L 16.75 11.34375 Z"></path></svg></button>`
        }
    

    window.dynamic_browser_title = {
        show: true,
        text: ''
    };
    
    window.show_more_btn_text = {
        show_more: `Show More`,
        show_less: `Show Less`,
        show_all: `Show All`,
    };

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }
    
    const cookieAnnouncemenClosed = getCookie('announcement');
    window.announcementClosed = cookieAnnouncemenClosed === 'closed'
</script>
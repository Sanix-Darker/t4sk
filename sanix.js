function startView() {
    var a = '<li class="rfl-item"><div class="arrow-background"></div><div class="rfl-list-content"></div><div class="buttons"><span class="fa fa-times rfl-delete"></span><span class="fa fa-plus-circle rfl-add"></span><div class="rfl-handle fa icon-handle"></div></div></li>',
        b = '<span class="fa fa-chevron-right rfl-trigger fa-rotate-90"></span>',
        c = '<li class="rfl-subaccordion-item"><ul style="display: block;" class="rfl-subAccordion rfl-list rfl-trigger-item rfl-open"></ul>',
        d = '<ul style="display: block;" class="rfl-subAccordion rfl-list rfl-mainAccordion rfl-trigger-item rfl-open"></ul>',
        e = '<span class="fa fa-chevron-right rfl-trigger rfl-trigger-main"></span>',
        f = {
            stateUpdate: function() {
                saveState.listsChanged = !0
            },
            domUpdate: function() {
                gridsterUpdate.call(this)
            },
            removeMainList: function(a) {
                gridsterRemoveItem(a)
            },
            triggerRotClass: "fa-rotate-90",
            newItemMarkup: a,
            openTriggerMarkup: b,
            subListMarkup: c,
            subListMarkupMain: d,
            mainTriggerMarkup: e
        },
        g = {
            widget_selector: ".brick",
            widget_margins: [10, 0],
            widget_base_dimensions: [535, 10],
            max_cols: 3,
            max_size_x: 1,
            avoid_overlapped_widgets: !0,
            autogrow_cols: !0,
            resize: {
                enabled: !0,
                handle_class: !1
            },
            draggable: {
                handle: ".buttons-title .dd-handle"
            }
        };
    $("#base-list").richFunctionalList(f), pluginMediaQueries(!1, g), $(window).resize(function() {
        pluginMediaQueries(!0, g)
    }), $("#list-icon").click(function() {
        $(this).toggleClass("open"), $("#menu-content").slideToggle(350)
    }), $("#save").on("click", function() {
        saveData($("#base-list"))
    }), $("#main-add").unbind().click(function() {
        saveState.listsChanged = !0;
        var a = $("#base-list"),
            b = a.getNumberLists(),
            c = b + 1;
        $(".gridster #base-list").gridster().data("gridster").add_widget('<li class="brick large rfl-list-title rfl-trigger-item" data-row="' + c + '" data-col="1" data-sizex="1" data-sizey="1" data-list-number="' + b + '"><div class="rfl-title-card"><div class="buttons-title"><span class="fa fa-times rfl-delete"></span><span class="fa fa-plus-circle rfl-add-title "></span><span class="dd-handle fa icon-handle"></span></div><h2 class="rfl-title-content"></h2></div></li>'), a.addNewList(f), a.rflListeners(), a.find("h2:last").trigger("click")
    })
}

function gridsterRemoveItem(a) {
    var b = $(".gridster #base-list").gridster().data("gridster");
    b.remove_widget(a)
}

function gridsterResizeCard() {
    var a = Math.round($(this).outerHeight() / 10 + 1);
    this.dataset.sizey = a
}

function gridsterUpdate() {
    var a, b = $(this).parents(".brick:first").length ? $(this).parents(".brick:first") : this.list.$rootList,
        c = $(".gridster #base-list").gridster().data("gridster");
    a = Math.ceil(b.outerHeight() / 10 + 1), c.resize_widget(b, 1, a)
}

function pluginMediaQueries(a, b) {
    window.innerWidth >= 1588 ? updateWindow(a, 3, 535, 1588, 1588, b) : window.innerWidth >= 1050 ? updateWindow(a, 2, 535, 1050, 1050, b) : window.innerWidth >= 650 ? updateWindow(a, 1, 535, 514, 650, b) : window.innerWidth >= 515 ? updateWindow(a, 1, 535, 514, 515, b) : updateWindow(a, 1, 320, 320, 320, b)
}

function updateWindow(a, b, c, d, e, f) {
    var g = $.extend({}, f, {
        max_cols: b
    });
    a && $(".gridster #base-list").gridster().data("gridster").destroy(), $("#base-list").children("li").each(gridsterResizeCard), $(".gridster #base-list").gridster(g), $("#base-list").css("width", d + "px"), e >= 650 ? ($("#flash-messaging").insertAfter("h1"), $("#menu-buttons").append($("#function-icons"))) : e >= 515 ? ($("#flash-messaging").insertAfter("h1"), $("#menu-content").prepend($("#function-icons"))) : ($("#menu-content").append($("#flash-messaging")), $("#menu-content").prepend($("#function-icons")))
}
$(function () {

    $.fn.tabs = function () {
        $.each(this, function (index, node) {
            new Tabs($(node))
        })
    }

    function Tabs($ct) {
        this.init($ct)
        this.bind()
    }
    Tabs.prototype = {
        init: function ($ct) {
            this.$ct = $ct
            this.$tabs = this.$ct.find('.tabs')
            this.$tabBtn = this.$ct.find('.tabs li')
            this.$content = this.$ct.find('.content')
            this.index = 0
        },
        bind: function(){
            var that = this
            this.$tabs.on('click','li',function(){
                that.index = $(this).index()
                $(this).addClass('active')
                       .siblings().removeClass('active')
            that.$content.eq(that.index)
                         .addClass('active')
                         .siblings().removeClass('active')
            })
        }

    }
    $('.box').tabs()
})
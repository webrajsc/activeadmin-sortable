(function($) {
  $(document).ready(function() {
    $('.handle').closest('tbody').activeAdminSortable();
  });

  $.fn.activeAdminSortable = function() {
    this.sortable({
      handle: '.handle',
      update: function(event, ui) {
        var url = ui.item.find('[data-sort-url]').data('sort-url');
        $.ajax({
          url: url,
          type: 'post',
          data: { position: ui.item.index() + 1 },
          success: function(e) {
            $('.handle').closest('tbody').find('tr').each(
                function(i, tr){
                    var element = $(tr);
                    if(element.hasClass('even') || element.hasClass('odd')) {
                        element.removeClass('even odd');
                        element.addClass(i % 2 ? 'even' : 'odd');
                    }
                }
            )
          }
        });
      }
    });

    this.disableSelection();
  }
})(jQuery);

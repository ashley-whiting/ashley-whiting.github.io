(function() {
  var closeModal, openModal;

  jQuery(function() {
    return jQuery('[data-modal]').each(function() {
      var elem, target, targetModalSelector;
      elem = jQuery(this);
      targetModalSelector = elem.attr('data-modal');
      target = jQuery(targetModalSelector);
      if (target.length === 0) {
        console.error("Could not find a modal with selector `" + targetModalSelector + "` to bind button to.");
        return;
      }
      return elem.on('click', function(e) {
        e.preventDefault();
        if (jQuery('body').hasClass('modal-active')) {
          return closeModal(target);
        } else {
          return openModal(target);
        }
      });
    });
  });

  openModal = function(modalElement) {
    jQuery('body').addClass('pause-scroll').addClass('modal-active');
    modalElement.show();
    modalElement.on('click', function(e) {
      if (e.target === this) {
        e.preventDefault();
        e.stopPropagation();
        return closeModal(modalElement);
      }
    });
    modalElement.find('> .outer').on('click', function(e) {
      if (e.target === this) {
        e.preventDefault();
        e.stopPropagation();
        return closeModal(modalElement);
      }
    });
    return modalElement.find('> .close').on('click', function(e) {
      e.preventDefault();
      return closeModal(modalElement);
    });
  };

  closeModal = function(modalElement) {
    jQuery('body').removeClass('pause-scroll').removeClass('modal-active');
    return modalElement.hide();
  };

}).call(this);


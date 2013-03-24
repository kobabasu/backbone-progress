define [
], (
) ->
  class Progress
    _cnt:     0
    _loaded:  0
    _total:   0
    _imgs:    []
    _fnc:     {}

    constructor: ->

    load: (imgs,fnc) ->
      @_imgs = imgs
      @_fnc = fnc
      @_total = @_imgs.length

      while @_cnt < @_total
        img = new Image()
        img.src = @_imgs[@_cnt]
        img.addEventListener 'load',@loaded,false
        @_cnt++

    loaded: =>
      @_loaded++
      if @_loaded == @_total
        @_fnc()

    start: ->
      $('body>*:not(#progress)').css('opacity',1)

      end = ->
        $('#progress').remove()

      $('#progress').addClass('pageOut')
        .bind('
          webkitTransitionEnd
          transitionend
          oTransitionEnd
          msTransitionEnd
        ',end)

  return new Progress()

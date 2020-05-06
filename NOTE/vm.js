const vm = {
  uid: Number,
  _isVue: Boolean, 
  _self: Object, // this
  $options: {
    el: String, // DOM instence
    // other user options such as methods mounted and so on
  },
  // init lifecycle
  $parent: Object, // vm
  $root: Object, // vm
  $children: Object, //vm
  $refs: Object,
  _watcher: Object,
  _inactive: Object,
  _directInactive: Object,
  _isMounted: Boolean,
  _isDestroyed: Boolean,
  _isBeingDestroyed: Boolean,
  // init event
  _events: Object,
  _hasHookEvent: Boolean,
  // init render
  _vnode: Object,
  $vnode: Object, // options._parentVnode
  _staticTrees: Object, // for v-once
  $slots: Object,
  $scopedSlots: Object,
  _c: Function, // render function for template complier
  $createElement: Function, // exposed render function for user
  $attrs: Object, // use reactive function to be reactive so that HOCs using them are always updated and readOnly
  $listeners: Object, // use reactive function to be reactive so that HOCs using them are always updated readOnly
  // init stateMixin
  $data: Object, // reactive
};

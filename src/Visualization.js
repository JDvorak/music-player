var Visualization = Backbone.Model.extend({

  initialize: function(){
    this.set('renderer', new THREE.WebGLRenderer());
    this.set('scene', new THREE.Scene());
    this.set('camera', new  THREE.PerspectiveCamera(75, 850/300, 0.1, 1000));
    this.get('renderer').setSize(850, 300);
    this.get('camera').position.z = 5;
  },

  setScene: function() {
    this.geometry = new THREE.CubeGeometry(3,3,3);
    this.material = new THREE.MeshLambertMaterial({color: 0xffffff});
    this.cube     = new THREE.Mesh(this.geometry, this.material);

    this.get('scene').add(this.cube);

    //lights
    this.directionalLight = new THREE.DirectionalLight(0xffffff);
    this.directionalLight.position.set(0, 3, 2).normalize();
    this.get('scene').add(this.directionalLight)
  },

  renderFrame: function(mag, kick) {
    if (kick) {
      this.cube.rotation.x += mag/3;
      this.cube.rotation.y += mag/3;
    }
    this.cube.rotation.x += .02;
    this.cube.rotation.y += .02;

    this.get('renderer').render(this.get('scene'), this.get('camera'));
  }


});
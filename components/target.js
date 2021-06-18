AFRAME.registerComponent("target-ring", {
    init:function () {
        for(var i=1;i<=20;i++){
            var id = `ring${i}`;
            var posX=(Math.random()*3000+(-1000));
            var posY=(Math.random()*2+(-1));
            var posZ=(Math.random()*3000+(-1000));
            var pos ={x:posX,y:posY,z:posZ};
            this.createRings(id, pos)
        }
    },
    createRings:function (id,position) {
        var ringEl = document.createElement("a-entity");
        var terrainEl = document.querySelector("#terrain");
        ringEl.setAttribute("id",id);
        ringEl.setAttribute("position",position);
        ringEl.setAttribute("material","color","#ff0000");
        ringEl.setAttribute("geometry",{primitive:"torus", radius:8});
        ringEl.setAttribute("static-body", {
            shape: "sphere",
            sphereRadius: 2
        });    
        ringEl.setAttribute("game-play", {
            elementId:`#${id}`
        }); 
        terrainEl.appendChild(ringEl);
    }
})

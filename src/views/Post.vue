<template>
    <div>
    <!-- CONTENIDO PARA LA VISTA PRINCIPAL O PADRE DEL POST -->   
      <!-- Muestra directamente la ruta hija-->
      <router-view :to="{name: 'Articulo'}"></router-view>
    <div>
    <!-- IMPLEMENTAR EL ROUTER VIEW QUE MUSTRE EL ARTICULO-->
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
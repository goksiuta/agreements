// Single feature
Vue.component('paragraph-icon', {
  props: ['title', 'description', 'icon'],
  template: 
  `
  <div class="column">
        <figure class="has-background-dark">
            <img :src=icon />
        </figure>
        <h2 class="has-text-white has-text-weight-light is-size-4">{{title}}</h2>
        <p class="has-text-grey has-text-weight-light is-size-5">{{description}}</p> 
   </div>
  `
})
// Features 
Vue.component('features-section', {
  props: ['array'],
  template: 
  `
    <section id="advantages" class="section has-background-dark is-marginless">
    <div class="container">
    <div class="columns"> 
      <paragraph-icon v-for="item in array" :key="item.id"
        :icon=item.img
        :title=item.title
        :description=item.description
      >
    	</paragraph-icon>
    </div>
  </div>
</section>
  	
  `
})

// Header 
Vue.component('header-component', {
  props: ['array'],
  template: 
  `
  <section class="container">
  <nav>
    <div class="navbar-brand">
    <!-- Logo !-->
       <div class="navbar-brand">
        <a class="navbar-item" href="#">
           <img src="img/logo.svg" alt="Bulma: a modern CSS framework based on Flexbox" width="186" height="32">
        </a>
    </div>

     <!-- Right side !--> 
     <div class="navbar-menu">
         <div class="navbar-end">
            <p v-for="item in array" class="navbar-item">
              <a :href="item.link">
               {{item.value}}
              </a>
           </p>

          <p class="navbar-item">
              <a class="button" href="#">
                Contact
              </a>
          </p>
            
         </div> 
   </div>
   </div>
  </nav> 
  </section>
  	
  `
})

Vue.component('slider-render-all', {
  props: ['arrays'],
  template: 
  `
  <ul class="slider">
  	<slider-item 
  		v-for="item in arrays" 
  		:name="item.name"
  	>
  	</slider-item>
  </ul>
  `
})


Vue.component('slider-item', {
  props: ['name', 'currentSlide'],
  data: function () {
    return {
      count: 0,
      isActive: false,
    }
  },
  template: 
  `
  	<li  :class="{ active:isActive }"> <a v-on:click="count++, isActive = true" > {{name}} {{count}} </a></li>
  `
})


var app = new Vue({
  el: '#app',
  data: {
  	postFontSize: 1,
  	currentSlide:1,
    Header: 'Agreements on the Ethereum blockchain Github',
    Subheader: 'Create agreements with ease and store safely on the blockchain.',
    ButtonLink: 'Check our Prototype',
    menu: [
      { value: 'Home', link: 'home' },
      { value: 'How it works', link: 'how-it-works' },
      { value: 'Prototype', link: 'prototype' },
    ],
    features: [
    	{
    		title: 'Streamline the contracting process.', 
    		description:'Prepare and sign agreements in a flash and share it with your contractors.', 
    		img:'img/feather.svg' 
    	},
    	{
    		title: 'Reduce cost of legal services.', 
    		description:'Simplify the contracting process and make agreements clear and understandable. Save on expensive legal services.', 
    		img:'img/pocket.svg' 
    	},
    	{
    		title: 'Improve security and compliance.', 
    		description:'Both parties can rest assure the documents they signed are stored in a safe and immutable way.', 
    		img:'img/lock.svg' 
    	},
    ],
    imgSlider: [
    	{
    		name:'Create an agreement with a simple form.',
    		img:'img/slider-1.png',
    	},
    	{
    		name:'Sign contract on the blockchain.',
    		img:'img/slider-1.png',
    	},
    	{
    		name:'Transfer payments in ETH once work is delivered.',
    		img:'img/slider-1.png',
    	},

    ]

  }
})
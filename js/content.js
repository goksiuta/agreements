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
              <a class="button" href="mailto:maxmice@gmail.com">
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

// Use Cases 

Vue.component('use-cases', {
  props: ['array'],
  template: 
  `
  <section class="use-case"> 
  <div class="container">
  <h2 class="title has-text-weight-light is-size-3 has-text-centered" >
       Use Cases
      </h2>
    <div class="columns">
      <div v-for="item in array" class="column">
        <div class="card-dropshadow">
          <div>
          <h2 class="has-text-dark has-text-weight-light is-size-4">{{item.value}} </h2>
          <p class="has-text-grey has-text-weight-medium is-size-5">{{item.description}}.</p>
          </div>
          <a href=""></a>
        </div>
      </div>
    </div>
  </div>
</section>
    
  `
})


// Render all items in slider
Vue.component('slider-render-all', {
  props: ['arrays'],
  template: 
  `
  <ul class="slider">
  	<slider-item 
  		v-for="(item, index) in arrays" 
  		:name="item.name"
      :index="index"
  	>
  	</slider-item>
  </ul>
  `
})

// One line slider
Vue.component('slider-item', {
  props: ['name', 'currentSlide', 'index'],
  data: function () {
    return {
      count: 0,
      isActive: false,
    }
  },
  template: 
  `
  	<li :class="{}"> 
    <a 
    v-on:click="count++, isActive ? isActive=false : isActive=true"
    > 
    {{name}}
    </a>
    </li>
  `
})


Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})


var app = new Vue({
  el: '#app',
  methods: {
      update_current_slider: function (newCurrentSlider) 
      {
        return this.currentSlide = newCurrentSlider
      },
      show_current_slider: function () 
      {
        return this.currentSlide
      },

  },
  data: {
  	postFontSize: 1,
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' },
    ],
  	currentSlide:1,
    Header: 'Agreements on the Ethereum blockchain',
    Subheader: 'Create agreements with ease and store safely on the blockchain.',
    ButtonLink: 'Check our Prototype',
    menu: [
      { value: ' ', link: 'home' },
      { value: ' ', link: 'how-it-works' },
      { value: ' ', link: 'prototype' },
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

    ],
    useCases: [
      { value: 'Hiring remote freelancers ', description: 'Ensure a smooth hiring process by creating agreements in a flash and sharing them with your contractors.  ' },
      { value: 'Customized agreements ', description: 'You can adjust each agreement to your needs. ' },
      { value: 'Buil reputation as a contractor   ', description: 'Maintain a well organized, modern contracting system that will enhance your business.' },
    ],

  }
})
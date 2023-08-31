<script>
  import services from '../../resources/subpages/contact';
  import Project from '../components/pages/Project.svelte';
</script>


<span class="block bold mb-2">{services.header}</span>
<div class="services-container">
    {#each services.projects as product}
        <div class="product">
            <Project {product}/>
        </div>
    {/each}
</div>

<style>
    .product {
        width: calc(50% - 15px);
    }

    .services-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 30px;
    }


    @media only screen and (max-width: 850px) {
        .product {
            width: 100%;
        }

        .services-container {
            column-gap: 0;
            row-gap: 10px;
        }
    }
</style>
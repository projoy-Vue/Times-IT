<template>
    <div class="contact">
        <ContactHeader />
        <ContactInformation />
        <div class="flex">
        <ContactForm/>
        <ContactMap/>
        <FAQs/>
    </div>

        
    </div>
</template>

<script>
import ContactHeader from '../components/contact/ContactHeader.vue';
import ContactInformation from '../components/contact/ContactInformation.vue';
import ContactForm from '../components/contact/ContactForm.vue';
import ContactMap from '../components/contact/ContactMap.vue';
import FAQs from '../components/contact/FAQs.vue';


export default {
    components: {
        ContactHeader,
        ContactInformation,
        ContactForm,
        ContactMap,
        FAQs,
        
    },
};
</script>
<style>

</style>
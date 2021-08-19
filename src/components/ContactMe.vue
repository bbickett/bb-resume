<template>
    <b-modal id="contact-me" title="Contact Me" size="lg" @ok="submitContactForm" @hidden="resetForm">

        <b-form v-if="!successfulSubmit" name="contact" :validated="true" ref="contact" method="POST" netlify data-netlify="true" data-netlify-honeypot="title">

            <input type="hidden" name="form-name" value="contact" />

            <p class="d-none">
                <input type="text" name="title">
            </p>

            <b-form-group
                id="email-name"
                label="Name"
                label-for="name-input"
            >
                <b-form-input
                    id="name-input"
                    v-model="form.name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    ></b-form-input>
            </b-form-group>

            <b-form-group
                id="email-address"
                label="Email address"
                label-for="email-input"
            >
                <b-form-input
                    id="email-input"
                    v-model="form.email"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    required
                    ></b-form-input>
            </b-form-group>


            <b-form-group
                id="email-message"
                label="Message"
                label-for="message-input"
                description=""
            >

                <b-form-textarea
                    id="message-input"
                    v-model="form.message"
                    placeholder="What's on your mind?"
                    rows="6"
                    name="message"
                ></b-form-textarea>

            </b-form-group>


        </b-form>
        <div v-else>
                <b-alert show>Thank you for getting in touch!</b-alert>
        </div>

        <template #modal-footer="{ ok, hide }">
            <div class="w-100">
                <b-button
                    variant="secondary"
                    class="float-right"
                    @click="hide('forget')"
                    v-if="successfulSubmit"
                >
                    Close
                </b-button>
                <b-button
                    variant="primary"
                    class="d-flex ml-auto"
                    @click="ok()"
                    v-if="!successfulSubmit"
                >
                    Submit
                </b-button>
            </div>
      </template>

    </b-modal>
</template>

<script>
    import { urlEncode } from '@/utils'
    import axios from 'axios'

    export default {
        data() {
            return {
                successfulSubmit: false,
                valid: false,
                form: {
                    name: '',
                    email: '',
                    message: '',
                    'form-name': 'contact'
                }
            }
        },
        methods: {
            resetForm() {
                this.form.name = ''
                this.form.email = ''
                this.form.message = ''
                this.valid = false
                this.successfulSubmit = false
            },
            checkFormValidity() {
                const valid = this.$refs.contact.checkValidity()
                this.valid = valid
            },
            submitContactForm(bvModalEvt) {

                this.checkFormValidity()

                let self = this

                bvModalEvt.preventDefault()

                if (!this.valid) {
                    console.log("invalid form")
                    return
                }

                axios.post(
                    '/',
                    urlEncode(this.form),
                    { header: { "Content-Type": "application/x-www-form-urlencoded" } }
                )
                .then(() => {
                    self.successfulSubmit = true
                    // console.log('Form successfully submitted')
                    // self.$nextTick(() => {
                    //     self.$bvModal.hide('modal-prevent-closing')
                    // })
                })
                .catch((error) => console.log(error))

            }
        }
    }
</script>
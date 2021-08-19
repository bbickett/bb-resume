<template>
    <div class="bio">
        <h1>Brian<br>Bickett</h1>
        <h3 class="text-mute mt-4">Senior Full Stack Engineer</h3>

        <div class="personal-info">
            <h4 class="heading">Info</h4>

            <div class="subheading">
                <b-icon icon="geo-alt-fill" class=""></b-icon>
                <div class="info">
                    Naples FL
                </div>
            </div>

            <div class="subheading">
                <b-icon icon="linkedin"></b-icon>
                <a href="https://www.linkedin.com/in/bbickett/" target="_blank" rel="noopener noreferrer">linkedin.com/in/bbickett</a>
            </div>


            <div class="subheading">
                <b-icon icon="github"></b-icon>
                <a href="https://github.com/bbickett" target="_blank" rel="noopener noreferrer">github.com/bbickett</a>
            </div>

            <div class="subheading contact-me" @click="showContactForm">
                <b-icon icon="chat-fill"></b-icon>
                <div class="info">
                    Contact Me
                </div>
            </div>

                        

        </div>

        <div class="education">
            <h4 class="heading">Education</h4>

            <h5 class="degree">Masters in Computer Science</h5>
            <small>Western Kentucky University</small><br>
            <small>2008</small>


            <h5 class="degree">Bachelor of Interdisciplinary Studies Emphasis in Technology</h5>
            <small>Western Kentucky University</small><br>
            <small>2006</small>


            <h5 class="degree">Computer Information Systems</h5>
            <small>University of Louisville</small><br>
            <small>1998-2001</small>

        </div>


        <div class="hobbies">
            <h4 class="heading">Hobbies</h4>
            <span class="hobby"><fa-icon icon="child"></fa-icon>Family Time</span>
            <span class="hobby"><fa-icon icon="cloud-sun"></fa-icon>Outdoors</span>
            <span class="hobby"><fa-icon icon="hammer"></fa-icon>Woodworking</span>
            <span class="hobby"><fa-icon icon="glasses"></fa-icon>Reading</span>
            <span class="hobby"><fa-icon icon="camera"></fa-icon>Photography</span>
            <span class="hobby"><fa-icon icon="running"></fa-icon>Running</span>            
            <span class="hobby"><fa-icon icon="car"></fa-icon>Working on cars</span>
            <span class="hobby"><fa-icon icon="music"></fa-icon>Music</span>
            <span class="hobby"><fa-icon icon="code-branch"></fa-icon>Constantly learning</span>  

        </div>


        <contact-me></contact-me>

        
    </div>
    
</template>

<style lang="scss">
    .contact-me {
        cursor: pointer;

        &:hover {
            color: #ccc;
        }
    }
</style>


<script>
    import ContactMe from '@/components/ContactMe'

    export default {
        name: 'bio',
        components: {
            ContactMe
        },
        methods: {
            showContactForm() {
                this.$bvModal.show('contact-me')
            }
        }


    }

</script>
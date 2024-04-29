<template>
  <form @submi.prevent="HandleSubmit">
    <h3>Sign Up</h3>
    <div class="auth-wrapper">
        <div class="auth-inner">
    <div class="form-group">
      <label>Full Name</label>
      <input type="text" class="form-control" v-model="full_name" placeholder="Enter Full Name" />
    </div><br>

    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="email" placeholder="Enter Email" />
    </div><br>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Enter Password" />
    </div><br>

    <div class="form-group">
      <label>Confirm Password</label>
      <input type="password" class="form-control" v-model="password_confirm" placeholder="Confirm Password" />
    </div><br>
    <div class="btn">
      <button class="btn btn-primary btn-block">Sign Up</button>
    </div>      </div>
      </div>
  </form>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      full_name: '',
      email: '',
      password: '',
      password_confirm: ''
    }
  },
  methods: {
    HandleSubmit() {
      const data = {
       full_name: this.full_name,
       email: this.email,
       password: this.password,
       password_confirm: this.password_confirm
      }
      console.log(data);
    }
  }
};
</script>

<style>
/* Add your styling here */
</style>
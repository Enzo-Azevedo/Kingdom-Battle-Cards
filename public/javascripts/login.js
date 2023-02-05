window.onGoogleLibraryLoad = () => {
  google.accounts.id.initialize({
    client_id:'65428256034-1ib6n9qcq3hkhgb9lh5ot3a3h1gdnat0.apps.googleusercontent.com',
    cancel_on_tap_outside: false,
    //callback: onOneTapSignedIn,
    prompt_parent_id: "g_id_signin",
    cookiepolicy: 'single_host_origin',
    //intermediate_iframe_close_callback : close_callback1
  });
  google.accounts.id.prompt((notification) => {
    if (notification.isNotDisplayed()) {
      console.log(notification.getNotDisplayedReason());
    } else if (notification.isSkippedMoment()) {
      console.log(notification.getSkippedReason());
    } else if (notification.isDismissedMoment()) {
      console.log(notification.getDismissedReason());
    } else {
      this.attachSignin(document.getElementById('g_id_signin'));
    }
  });
}
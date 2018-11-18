async uportLogin() {
    try {
      const user = await this.uportService.getUport().requestCredentials({
        requested: ['name', 'phone', 'country', 'avatar'],
        notifications: true // We want this if we want to recieve credentials
      });

      if (user) {
        user.avatar = user.avatar ? user.avatar.uri : 'assets/img/unknown-user.png';
        this.storageService.setItem('user', user);
        (window as any).uportWeb3 = this.uportService.getWeb3();
      }
    } catch (error) {
      console.log(error);
    }

  }

  login(userType) {
    const user = this.storageService.getItem('user');
    if (user) {
      user.type = userType;
      this.storageService.setItem('user', user);
      this.walletService.getCurrentAccount();
      this.router.navigate([this.solveRoute(userType)]);
    } else {
      this.errorMessages.push('You have to connect your uPort to proceed. Check your phone to see if there\'s any uPort request there');
    }
  }

#### Console Port Security

```CLI
!THERE IS ONLY A SINGLE CONSOLE LINE ('A CONNECTION') SO THE NUMBER IS ALWAYS 0
Router(config)#line console 0

!CONFIGURE THE CONSOLE LINE'S PASSWORD
Router(config-line)#password ccna

!TELL THE ROUTER/DEVICE TO REQUIRE THE PASSWORD SPECIFIED ABOVE
Router(config-line)#ccna
```

**Alternative Login Configuration**

```CLI
!CONFIGURE A USERNAME-SECRET PAIR (AN 'ACCOUNT')
Router(config)#username jeremy secret ccnp

Router(config)#line console 0

!TELL THE ROUTER/DEVICE TO REQUIRE THE USERNAME-SECRET PAIR CONFIGURED ABOVE, SO BOTH THE USERNAME AND THE PASSWORD WILL BE ASKED FOR
Router(config-line)#login local
```
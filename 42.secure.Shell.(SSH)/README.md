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

#### Remote Management of Devices (Switches)

- To enable Remote access, Switches first have to be configured with an IP Address - this can be done through a VLAN

```CLI
Switch(config)#interface vlan1
Switch(config-if)#ip address 192.168.1.253 255.255.255.0
Switch(config-if)#no shutdown
Switch(config-if)#exit

!CONFIGURING THE DEFAULT GATEWAY ON A SWITCH
Switch(config)#ip default-gateway 192.168.1.254 
```

#### Telnet Configuration (on Switch) for Remote Access

```CLI
!MANDATORY TO ENABLE ACCESS TO PRIVILEGED EXEC MODE VIA TELNET
Switch(config)#enable secret ccna

!CONFIGURE A USERNAME-SECRET PAIR IF WE WANT TO USE 'LOGIN LOCAL' LATER
Switch(config)#username jeremy secret ccna

!AN ACL TO LIMIT WHICH DEVICES CAN CONNECT TO THE VTY LINES
Switch(config)#access-list 1 permit host <ip_address>

!ALLOWS 16 USERS TO BE CONNECTED AT ONCE
Switch(config)#line vty 0 15

Switch(config-line)#login local

Switch(config-line)#exec-timeout 5 0

!ALLOW ONLY TELNET INCOMING CONNECTIONS
Switch(config-line)#transport input telnet

!APPLY THE ACL TO THE VTY LINES
Switch(config-line)#access-class 1 in
```

#### SSH Enabling

```CLI
!FIRST, WE MUST CONFIGURE A NON-DEFAULT HOSTNAME FOR THE DEVICE
Switch1(config)#hostname Switch1

!WE MUST THEN CONFIGURE A DOMAIN NAME, BECAUSE THE FQDN (= FULLY QUALIFIED DOMAIN NAME (HOST NAME + DOMAIN NAME) IS USED TO NAME THE RSA KEYS)
Switch1(config)#ip domain name wooltrod.com

Switch1(config)#crypto key generate rsa modulus <bit_length>

## the length must be 768 bits or greater to use SSHv2 ##
```

#### SSH Configuration

```CLI
!MANDATORY TO ENABLE ACCESS TO PRIVILEGED EXEC MODE VIA TELNET
Switch1(config)#enable secret ccna

!CONFIGURE A USERNAME-SECRET PAIR IF WE WANT TO USE 'LOGIN LOCAL' LATER
Switch1(config)#username jeremy secret ccna

!AN ACL TO LIMIT WHICH DEVICES CAN CONNECT TO THE VTY LINES
Switch1(config)#access-list 1 permit host <ip_address>

Switch1(config)#ip ssh version 2

Switch1(config)#line vty 0 15

!ONLY LOGIN LOCAL IS SUPPORTED FOR SSH - A USERNAME IS REQUIRED
Switch1(config-line)#login local

Switch1(config-line)#exec-timeout 5 0

!IT IS BEST PRACTICE TO LIMIT THE VTY LINE CONNECTIONS TO SSH ONLY
Switch1(config-line)#transport input ssh

Switch1(config-line)#access-class 1 in
```

- Connecting to the SSH Server: **ssh -l username ip-address** OR **ssh username@ip-address**
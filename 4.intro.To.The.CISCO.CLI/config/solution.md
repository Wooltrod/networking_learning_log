1. Change the hostnames of the router and switch to the appropriate names (R1, SW1)

```CLI
Router(config) #hostname R1
Switch(config) #hostname SW1
```

2.  Configure an unencrypted enable password of 'CCNA' on both devices

```CLI
Router(config) #enable password CCNA
Switch(config) #enable password CCNA
```

3. Exit back to user EXEC mode and test the password

```CLI
Router(config)#exit
Router#exit
Router >en

Switch(config)#exit
Switch#exit
Switch>en
```

4.  View the password in the running configuration

```CLI
Router#show running-config

Switch#show running-config
```

5. Ensure that the current password, and all future passwords, are encrypted

```CLI
Router(config)# service password-encryption

Switch(config)# service password-encryption
```

6. View the password in the running configuration

```CLI
Router#show running-config

Switch#show running-config
```

7. Configure a more secure, encrypted enable password of 'Cisco' on both devices

```CLI
Router(config)#enable secret Cisco

Switch(config)#enable secret Cisco
```

8. Exit back to user EXEC mode and then return to privileged EXEC mode.

```CLI
Router(config)#exit
Router#exit
Router >en

Switch(config)#exit
Switch#exit
Switch>en
```

9. View the passwords in the running configuration.

```CLI
Router#show running-config

Switch#show running-config
```

10. Save the running configuration to the startup configuration
```CLI
Router#copy running-config startup-config

Switch#copy running-config startup-config
```
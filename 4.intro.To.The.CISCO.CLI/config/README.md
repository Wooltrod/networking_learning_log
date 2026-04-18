**Link to** [**Packet Tracer File**](./Day%2004%20Lab%20-%20Basic%20Device%20Security.pkt)

1. Change the hostnames of the router and switch to the appropriate names (R1, SW1)

```CLI
Router(config) #hostname R1
Switch(config) #hostname SW1
```

2.  Configure an unencrypted enable password of 'CCNA' on both devices

```CLI
R1(config) #enable password CCNA
SW1(config) #enable password CCNA
```

3. Exit back to user EXEC mode and test the password

```CLI
R1(config)#exit
R1#exit
R1 >en

SW1(config)#exit
SW1#exit
SW1>en
```

4.  View the password in the running configuration

```CLI
R1#show running-config

SW1#show running-config
```

5. Ensure that the current password, and all future passwords, are encrypted

```CLI
R1(config)# service password-encryption

SW1(config)# service password-encryption
```

6. View the password in the running configuration

```CLI
R1#show running-config

SW1#show running-config
```

7. Configure a more secure, encrypted enable password of 'Cisco' on both devices

```CLI
R1(config)#enable secret Cisco

SW1(config)#enable secret Cisco
```

8. Exit back to user EXEC mode and then return to privileged EXEC mode.

```CLI
R1(config)#exit
R1#exit
R1 >en

SW1(config)#exit
SW1#exit
SW1>en
```

9. View the passwords in the running configuration.

```CLI
R1#show running-config

SW1#show running-config
```

10. Save the running configuration to the startup configuration
```CLI
R1#copy running-config startup-config

SW1#copy running-config startup-config
```

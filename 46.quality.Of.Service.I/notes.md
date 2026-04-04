### Configuring Connection to IP phone, which is also connected to a PC, on a Switch interface

```CLI
!PC1 will send traffic untagged (as normal). SW1 will use CDP (CISCO Discovery Protocol) to tell PH1 to tag PH1's traffic in VLAN 11
Switch(config)#interface gigabitEthernet0/0
Switch(config-if)#switchport mode access
Switch(config-if)#switchport access vlan 10
Switch(config-if)#switchport voice vlan 11
```

### Power over Ethernet (PoE)

```CLI
!DEFAULT CONFIG, ACTION IS ERR-DISABLE
Switch(config-if)#power inline police
            ## OR ##
Switch(config-if)#power inline police action err-disable

!CONFIG WITH ACTION SET AS LOGGING
Switch(config-if)#power inline police action log
```
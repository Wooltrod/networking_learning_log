### EtherChannel is a Protocol that allows us to group multiple physical interfaces on a Switch or Router, into a group which operates as a single, logical interface

- It is used to curb **OVERSUBSCRIPTION**, a situation where the total bandwidth of the switchports/switchinterfaces connected to end hosts exceeds the bandwidth of the outbound switchport to the distribution switch.

- EtherChannel may also be referred to as Port Channel or Link Aggregation Group (LAG).

### Load Balancing in EtherChannel
- The command below gives us details on which parameters are used in Switch ASW1 to determine load-balancing on EtherChannel

```CLI
ASW1#show etherchannel load-balance
```


| ![alt text](image.png) |
|-|

- The command below is how to select the load-balancing parameters:

```CLI
ASW1(config)#port-channel load-balance <parameter>
```


| ![alt text](image-1.png) |
|-|

### EtherChannel Configuration:

```CLI
ASW1(config)#interface range g0/0 - 3
ASW1(config-if-range)#channel-group 1 mode ?
    active      Enable LACP unconditionally
    auto        Enable PAgP only if a PAgP device is detected
    desirable   Enable PAgP unconditionally
    on          Enable Etherchannel only
    passive     Enable LACP only if a LACP device is detected
```

- Manually configuring the Negotiation Protocol:

```CLI
ASW1(config)#interface range g0/0 - 3
ASW1(config-if-range)#channel-protocol ?
    lacp    Prepare interface for LACP protocol
    pagp    Prepare interafce for PAgP protocol
```

**LACP**

```CLI
ASW1(config-if-range)#channel-protocol lacp
ASW1(config-if-range)#channel-group 1 mode active

                    ##OR##

ASW1(config-if-range)#channel-group 1 mode passive
```

**PAgP**

```CLI
ASW1(config-if-range)#channel-protocol pagp
ASW1(config-if-range)#channel-group 1 mode desirable

                    ##OR##

ASW1(config-if-range)#channel-group 1 mode auto
```

### Verifying The Status of an EtherChannel:

```CLI
ASW1#show etherchannel summary

            ##OR##
ASW1#show etherchannel port-channel       
```

### Layer 3 EtherChannel (For RouterPorts or SwitchPorts on Layer 3 Switches)


| ![alt text](image-2.png) |
|-|

- Note that on Layer 3 switches, we have to configure the interfaces as routerports, by issuing the 'no switchport' command - this avoids broadcast storms/loops

```CLI
ASW1(config)#interface range g0/0 - 3
ASW1(config-if-range)#no switchport
ASW1(config)#interface range g0/0 - 3
ASW1(config-if-range)#channel-group 1 mode active
```

- Configuring an IP Address on the EtherChannel Port:

```CLI
ASW1(config)#interface range po1
ASW1(config-if)#ip address 10.0.0.1 255.255.255.252
```
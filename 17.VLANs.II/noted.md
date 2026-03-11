### Multiple Access Ports (wasteful of interfaces):
![alt text](image.png)

### Fewer Trunk Ports:
![alt text](image-1.png)

- Notice How VLAN10 (Engineering Department) is split across 2 switches

![alt text](image-2.png)

- 802.1Q is the main Trunking Protocol used in the present day
- The 802.1Q tag is inserted between the SOURCE and TYPE/LENGTH fields of an Ethernet Header. It is 32 bits in length.
- **The NATIVE VLAN:** Switches do not add 802.1Q tags to frames belonging to the NATIVE VLAN (usually VLAN 1, but can be manually configured), therefore, when another switch receives an untagged frame on a trunk port, it assumes the frames belongs to the Native VLAN, and forwards it accordingly.

### Trunk Configuration
```CLI
SW1(config)#interface g0/0

##On older switches that still support ISL as well, MUST specify dot1q##

SW1(config-if)#switchport trunk encapsulation dot1q

##^^On older switches that still support ISL as well, MUST specify dot1q^^##

SW1(config-if)#switchport mode trunk

SW1(config-if)#switchport trunk allowed vlan 10,30

SW1(config-if)#switchport trunk allowed vlan add 20
```
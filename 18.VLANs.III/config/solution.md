### The topology:
![alt text](image.png)

### Initial Conditions:
SW1-SW2 are connected via trunk.
R1-SW2 are connected via ROAS.

1. Replace the ROAS configuration on R1-SW2 with a point-to-point Layer 3 connection. Use the IP addresses given in the network diagram. Configure a default route on SW2, with R1's G0/0 interface as the next hop.

**R1**
```CLI
R1(config)#no interface GigabitEthernet0/0.10
R1(config)#no interface GigabitEthernet0/0.20
R1(config)#no interface GigabitEthernet0/0.30
R1(config)#default interface GigabitEthernet0/0

R1(config)#interface g0/0
R1(config-if)#ip address 10.0.0.194 255.255.255.252
R1(config-if)#no shutdown
```

**SW2**
```CLI
SW2>en
SW2#conf t
SW2(config)#default interface g1/0/2

Building configuration...



Interface GigabitEthernet1/0/2 set to default configuration

SW2(config)#ip routing
SW2(config)#interface g1/0/2
SW2(config-if)#no switchport

SW2(config-if)#ip address 10.0.0.193 255.255.255.252
SW2(config-if)#no shutdown
SW2(config-if)#ip route 0.0.0.0 0.0.0.0 10.0.0.194
```

2. Configure SVIs on SW2, one for each VLAN. Assign the last usable IP address of each subnet to the appropriate SVI.
```CLI

```

3. Test inter-VLAN connectivity by pinging between VLANs.

4. Test connectivity to the Internet by pinging 1.1.1.1 (Routes have already been configured on R1 and the Internet router)
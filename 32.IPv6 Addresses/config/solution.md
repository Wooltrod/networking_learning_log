### The topology

![alt text](image.png)


1. Use EUI-64 to configure IPv6 addresses on G0/1 of R1/R2. *Before configuring the addresses, calculate the EUI-64 interface ID that will be generated on each interface.

**Calculating the EUI-64 interface ID**

<img width="1306" height="298" alt="capture_temp" src="https://github.com/user-attachments/assets/e80493e5-0013-4138-8697-282a17c233b5" />

**R1**

```CLI
R1>en
R1#conf t
R1(config)#ipv6 unicast-routing

R1(config)#interface g0/1
R1(config-if)#ipv6 address 2001:db8::/64 eui-64
R1(config-if)#no shutdown
```

![alt text](image-1.png)

**R2**

```CLI
R2>en
R2#conf t
R2(config)#ipv6 unicast-routing

R2(config)#interface g0/1
R2(config-if)#ipv6 address 2001:db8:0:1::/64 eui-64
R2(config-if)#no shutdown
```

![alt text](image-2.png)

2. Configure the appropriate IPv6 addresses/default gateways on PC1 and PC2.

**PC1**

```CLI
ipv6config /address 2001:db8::2/64
ipv6config /gateway 2001:DB8::230:F2FF:FE36:4502
```

**PC2**

```
ipv6config /address 2001:db8:0:1::2/64
ipv6config /gateway 2001:DB8:0:1:201:63FF:FEB0:B802
```

3. Enable IPv6 on G0/0 of R1/R2 without explicitly configuring an IPv6 address.

**R1**

```CLI
R1(config)#interface g0/0
R1(config-if)#ipv6 enable
```

**R2**

```CLI
R2(config-if)#interface g0/0
R2(config-if)#ipv6 enable
```

4. Configure static routes on R1/R2 to enable PC1 to ping PC2. Use the 'ipv6 route' command with '?' to learn how to use the command.

**R1**

```CLI
R1(config)#ipv6 route 2001:DB8:0:1::/64 gigabitEthernet0/0 FE80::201:63FF:FEB0:B801
```

**R2**

```CLI
R2(config)#ipv6 route 2001:db8::/64 gigabitEthernet0/0 FE80::230:F2FF:FE36:4501
```
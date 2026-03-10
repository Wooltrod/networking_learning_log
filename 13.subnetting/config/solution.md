### The topology:

![alt text](image.png)

Subnet the 192.168.5.0/24 network to provide sufficient addressing for each LAN.
(Also, the point-to-point connection between R1 and R2).


1. LAN2 (64 Hosts)
```CLI
Network Address: 192.168.5.0/25
Broadcast Address: 192.168.5.127/25
First Usable Address: 192.168.5.1/25
Last Usable Address: 192.168.5.126/25
Number of Usable Addresses: 126
```
---

2. LAN1 (45 Hosts)
```CLI
Network Address: 192.168.5.128/26
Broadcast Address: 192.168.5.191/26
First Usable Address: 192.168.5.129/26
Last Usable Address: 192.168.5.190/26
Number of Usable Addresses: 62
```
---

3. LAN3 (14 Hosts)
```CLI
Network Address: 192.168.5.192/28
Broadcast Address: 192.168.5.207/28
First Usable Address: 192.168.5.193/28
Last Usable Address: 192.168.5.206/28
Number of Usable Addresses: 14
```
---

4. LAN4 (9 Hosts)
```CLI
Network Address: 192.168.5.208/28
Broadcast Address: 192.168.5.223/28
First Usable Address: 192.168.5.209/8
Last Usable Address: 192.168.5.222/28
Number of Usable Addresses: 14
```
---

Point-to-Point Connection (2 Routers)
Assign the first usable address to the PC in each LAN.
```CLI
Network Address: 192.168.5.224/30
Broadcast Address: 192.168.5.227/30
First Usable Address: 192.168.5.225/30
Last Usable Address: 192.168.5.226/30
Number of Usable Addresses: 2
```

Assign the last usable address to the router's interface in each LAN.

Configure static routes on each router so that all PCs can ping eachother.
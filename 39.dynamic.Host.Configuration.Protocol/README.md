 
| ![alt text](image.png) |
|-|

 ### DHCP Release & Renew

 ```cli
ipconfig /release <--- issued on the client to drop its DHCP-assigned IP Address

ipconfig /renew <--- issued on the client to obtain a new DHCP IP address
 ```

 
| ![alt text](image-3.png) |
|-|

 ---

 ### The 4-way handshake of DHCP

 
| ![alt text](image-1.png) |
|-|

 
| ![alt text](image-2.png) |
|-|


### DHCP Relay


| ![alt text](image-4.png) |
|-|

### DHCP Server Configuration


| ![alt text](image-5.png) |
|-|

**To inspect DHCP config settings on Router**

```CLI
R1#show ip dhcp binding
```

### DHCP Relay Agent Configuration


| ![alt text](image-6.png) |
|-|

**Configuring a Router (Interface) as a DHCP Client**

![alt text](image-7.png)
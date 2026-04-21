### The topology

<img width="1154" height="1016" alt="{796FD6DB-5045-4F8E-8AAF-1B6C7B8FA475}(1)" src="https://github.com/user-attachments/assets/75912580-33b2-4c44-9783-62a5407fb4dd" />


**Access SW1**

```CLI
Access-SW1>en
Access-SW1#conf t

Access-SW1(config)#interface range f0/1 -2 
Access-SW1(config-if-range)#switchport mode access
Access-SW1(config-if-range)#switchport access vlan 20

Access-SW1(config)#interface f0/24
Access-SW1(config-if)#switchport mode access
Access-SW1(config-if)#switchport access vlan 20
```

**Access SW2**

```CLI
Access-SW2>en
Access-SW2#conf t

Access-SW2(config)#interface range f0/1 - 2
Access-SW2(config-if-range)#switchport mode access

Access-SW2(config-if-range)#interface f0/1
Access-SW2(config-if)#switchport access vlan 10

Access-SW2(config-if)#interface f0/2
Access-SW2(config-if)#switchport access vlan 30

Access-SW2(config)#interface f0/24
Access-SW2(config-if)#switchport mode trunk
Access-SW2(config-if)#switchport trunk allowed vlan 10,30
```

**Access SW3**

```CLI
Access-SW3>en
Access-SW3#conf t

Access-SW3(config)#interface range f0/1 - 2
Access-SW3(config-if-range)#switchport mode access

Access-SW3(config-if-range)#interface f0/1
Access-SW3(config-if)#switchport access vlan 10

Access-SW3(config-if)#interface f0/2
Access-SW3(config-if)#switchport access vlan 30

Access-SW3(config)#interface f0/23
Access-SW3(config-if)#switchport mode trunk
Access-SW3(config-if)#switchport trunk allowed vlan 10,30
```

**Access SW4**

```CLI
Access-SW4>en
Access-SW4#conf t
	
Access-SW4(config)#interface range f0/1 - 2
Access-SW4(config-if-range)#switchport mode access
Access-SW4(config-if-range)#switchport access vlan 20

Access-SW4(config-if-range)#interface f0/24
Access-SW4(config-if)#switchport mode access
```

**Core SW1**

```CLI
Core-SW1(config)#interface f0/23
Core-SW1(config-if)#switchport mode access
Core-SW1(config-if)#switchport access vlan 20

Core-SW1(config-if)#interface f0/24
Core-SW1(config-if)#switchport mode trunk
Core-SW1(config-if)#switchport trunk allowed vlan 10,30
```

**Core SW2**

```CLI
Core-SW2(config)#interface f0/23
Core-SW2(config-if)#switchport mode trunk
Core-SW2(config-if)#switchport trunk allowed vlan 10,30


Core-SW2(config)#interface f0/24
Core-SW2(config-if)#switchport mode access
Core-SW2(config-if)#switchport access vlan 20
```

#### Router-On-A-Stick + DHCP Configuration

**Core SW1**

```CLI
Core-SW1>en
Core-SW1#conf t
Core-SW1(config)#interface g0/1

Core-SW1(config-if)#switchport mode trunk
Core-SW1(config-if)#switchport trunk allowed vlan 10,20,30
Core-SW1(config-if)#switchport trunk native vlan 99
```

**Core Router**

```CLI
!R O A S -- C O N F I G U R A T I O N

Core-Router>en
Core-Router#conf t

Core-Router(config)#interface g0/1.10
Core-Router(config-subif)#encapsulatio dot1q 10
Core-Router(config-subif)#ip address 192.168.10.1 255.255.255.0

Core-Router(config-subif)#interface g0/1.20
Core-Router(config-subif)#encapsulatio dot1q 20
Core-Router(config-subif)#ip address 192.168.20.1 255.255.255.0

Core-Router(config-subif)#interface g0/1.30
Core-Router(config-subif)#encapsulatio dot1q 30
Core-Router(config-subif)#ip address 192.168.30.1 255.255.255.0

Core-Router(config-subif)#exit

!D H C P -- C O N F I G U R A T I O N 
	
Core-Router(config)#ip dhcp pool STUDENTS_POOL
Core-Router(dhcp-config)#network 192.168.20.0 255.255.255.0
Core-Router(dhcp-config)#default-router 192.168.20.1
Core-Router(dhcp-config)#ip dhcp excluded-address 192.168.20.1

Core-Router(config)#ip dhcp pool STAFF_POOL
Core-Router(dhcp-config)#network 192.168.10.0 255.255.255.0
Core-Router(dhcp-config)#default-router 192.168.10.1
Core-Router(dhcp-config)#ip dhcp excluded-address 192.168.10.1

Core-Router(config)#ip dhcp pool IT_POOL
Core-Router(dhcp-config)#network 192.168.30.0 255.255.255.0
Core-Router(dhcp-config)#default-router 192.168.30.1
Core-Router(dhcp-config)#ip dhcp excluded-address 192.168.30.1
```

#### DHCP In Action on PCs

**PC01 (STUDENT VLAN)**
```CLI
C:\>ipconfig /renew

   IP Address......................: 192.168.20.2
   Subnet Mask.....................: 255.255.255.0
   Default Gateway.................: 192.168.20.1
   DNS Server......................: 0.0.0.0
```

**PC02 (STUDENT VLAN)**
```CLI
C:\>ipconfig /renew

   IP Address......................: 192.168.20.3
   Subnet Mask.....................: 255.255.255.0
   Default Gateway.................: 192.168.20.1
   DNS Server......................: 0.0.0.0
```

**PC03 (STAFF VLAN)**
```CLI
C:\>ipconfig /renew

   IP Address......................: 192.168.10.2
   Subnet Mask.....................: 255.255.255.0
   Default Gateway.................: 192.168.10.1
   DNS Server......................: 0.0.0.0
```

**PC04 (IT VLAN)**
```CLI
C:\>ipconfig /renew

   IP Address......................: 192.168.30.2
   Subnet Mask.....................: 255.255.255.0
   Default Gateway.................: 192.168.30.1
   DNS Server......................: 0.0.0.0
```

**PC05 (STAFF VLAN)**
```CLI
C:\>ipconfig /renew

   IP Address......................: 192.168.10.3
   Subnet Mask.....................: 255.255.255.0
   Default Gateway.................: 192.168.10.1
   DNS Server......................: 0.0.0.0
```

**PC06 (IT VLAN)**
```CLI
C:\>ipconfig /renew

   IP Address......................: 192.168.30.3
   Subnet Mask.....................: 255.255.255.0
   Default Gateway.................: 192.168.30.1
   DNS Server......................: 0.0.0.0
```

**PC07 (STUDENT VLAN)**
```CLI
C:\>ipconfig /renew

   IP Address......................: 192.168.20.4
   Subnet Mask.....................: 255.255.255.0
   Default Gateway.................: 192.168.20.1
   DNS Server......................: 0.0.0.0
```

**PC08 (STUDENT VLAN)**
```CLI
C:\>ipconfig /renew

   IP Address......................: 192.168.20.5
   Subnet Mask.....................: 255.255.255.0
   Default Gateway.................: 192.168.20.1
   DNS Server......................: 0.0.0.0
```
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

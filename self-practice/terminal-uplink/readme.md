Connect the Admin PC to SW2 via console cable (blue)

Access the CLI of the network devices from the Admin PC Command Prompt: 
RTR1: `C:\>ssh -l admin 10.10.10.1`
RTR2: `C:\>ssh -l admin 10.10.10.5`
RTR3: `C:\>ssh -l admin 10.10.10.9`
RTR4: `C:\>ssh -l admin 10.10.10.13`
SW2: `C:\>ssh -l admin 172.16.1.1`



When prompted for the password, type in `witty`

Enter global configuration mode: `configure terminal`

Enter interface configuration mode, where you configure OSPF on all interfaces on the device, including on Loopbacks and SVIs, only using the `ip ospf 1 area 0` command:

```
 device(config)#interface <interface_id>
 device(config-if)#ip ospf 1 area 0
```


**OSPF Neighbor Adjacency Issue Between RTR1 and RTR2**

There is a mismatch in the subnet mask of adjacent interfaces between RTR1 (/24) and RTR2 (/30), which prevents the forming of an OSPF adjacency between the two routers.

Correct this by issuing the following command on RTR1’s g0/0/0 interface:

```
RTR1(config-if)#ip address 10.10.10.1 255.255.255.252
```

Issue the `show ip route` command on each device to see if there are static routes (S), then proceed to remove them using the `no ip route <destination_address> <netmask> <next_hop>` command.

Verify connectivity by pinging between RTR1 and SW2.
1. Configure the switchports connecting switches as trunk ports. Disable DTP on the ports. Confirm the administrative and operational mode of each interface.

**SW1's G0/1 interface**

- We need to first to issue the "switchport mode trunk" command before disabling DTP using the "switchport nonegotiate"
```CLI
SW1#show interface g0/1 switchport

Name: Gig0/1
Switchport: Enabled
Administrative Mode: dynamic auto
Operational Mode: static access
Administrative Trunking Encapsulation: dot1q
Operational Trunking Encapsulation: native
Negotiation of Trunking: On
Access Mode VLAN: 1 (default)
Trunking Native Mode VLAN: 1 (default)
Voice VLAN: none
Administrative private-vlan host-association: none
Administrative private-vlan mapping: none
Administrative private-vlan trunk native VLAN: none
Administrative private-vlan trunk encapsulation: dot1q
Administrative private-vlan trunk normal VLANs: none
Administrative private-vlan trunk private VLANs: none
Operational private-vlan: none
Trunking VLANs Enabled: All
Pruning VLANs Enabled: 2-1001
Capture Mode Disabled
Capture VLANs Allowed: ALL
Protected: false
Unknown unicast blocked: disabled
Unknown multicast blocked: disabled
Appliance trust: none

SW1(config)#interface g0/1
SW1(config-if)#switchport mode trunk
SW1(config-if)#switchport nonegotiate 
SW1(config-if)#do show interface g0/1 switchport

Name: Gig0/1
Switchport: Enabled
Administrative Mode: trunk
Operational Mode: trunk
Administrative Trunking Encapsulation: dot1q
Operational Trunking Encapsulation: dot1q
Negotiation of Trunking: Off
Access Mode VLAN: 1 (default)
Trunking Native Mode VLAN: 1 (default)
Voice VLAN: none
Administrative private-vlan host-association: none
Administrative private-vlan mapping: none
Administrative private-vlan trunk native VLAN: none
Administrative private-vlan trunk encapsulation: dot1q
Administrative private-vlan trunk normal VLANs: none
Administrative private-vlan trunk private VLANs: none
Operational private-vlan: none
Trunking VLANs Enabled: All
Pruning VLANs Enabled: 2-1001
Capture Mode Disabled
Capture VLANs Allowed: ALL
Protected: false
Unknown unicast blocked: disabled
Unknown multicast blocked: disabled
Appliance trust: none
```
- Note the different between the first and second "show interface g0/1 switchport" commands' output, in the 'Administrative Mode' & 'Operational Mode' fields.

**SW2's G0/1 interface**
```CLI
SW2>en
SW2#conf t
SW2(config)#interface g0/1
SW2(config-if)#switchport mode trunk
SW2(config-if)#switchport nonegotiate
```

**SW2's G0/2 interface**
```CLI
SW2>en
SW2#conf t
SW2(config)#interface g0/2
SW2(config-if)#switchport mode trunk
SW2(config-if)#switchport nonegotiate
```

**SW3's G0/1 interface**
```CLI
SW3>en
SW3#conf t
SW3(config)#interface g0/1
SW3(config-if)#switchport mode trunk
SW3(config-if)#switchport nonegotiate
```

2. Configure SW1 in VTP domain CCNA. Create VLANs 10, 20, and 30 on SW1. Have SW2 and SW3 added VLANs 10, 20, and 30?
**SW1**
```CLI
SW1(config)#interface g0/1
SW1(config-if)#vtp domain CCNA
SW1(config)#vlan 10
SW1(config-vlan)#vlan 20
SW1(config-vlan)#vlan 30
```

**Yes, SW2 and SW3's VLAN databases are updated to sync with SW1**

3. Configure SW2 in VTP transparent mode. Add VLAN40 to SW2. Is VLAN40 added to the VLAN database of SW1/SW3?
**SW2**
```CLI
SW2(config)#vtp mode transparent
Setting device to VTP TRANSPARENT mode.
SW2(config)#vlan 40
```

**No, VLAN40 is not added to the VLAN databases of SW1 & SW3**

4. Configure SW3 in VTP client mode. Try to configure VLAN50 on SW3.  Is it added?
**No, it is not added**
```CLI
SW3(config)#vtp mode client
Setting device to VTP CLIENT mode.
SW3(config)#vlan 50
VTP VLAN configuration not allowed when device is in CLIENT mode.
```

5. Configure all switchports connected to hosts in the correct VLAN. Manually configure them as access ports. Is DTP still enabled on the switchports?
**No, the 'Negotiation of Trunking' field changes from 'on' to 'off'**
### HSRP Configuration:

**Router1 (Active)**

```CLI
Router1(config)#interface g0/0
Router1(config-if)#standby version 2
Router1(config-if)#standby 1 ip 172.16.0.254
Router1(config-if)#standby 1 priority 200
Router1(config-if)#standby 1 preempt
```

**Router2 (Standby)**

```CLI
Router2(config)#interface g0/0
Router2(config-if)#standby version 2
Router2(config-if)#standby 1 ip 172.16.0.254
Router2(config-if)#standby 1 priority 50
```
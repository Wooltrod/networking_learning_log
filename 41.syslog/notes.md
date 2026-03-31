### Standard SYSLOG Message Format

```CLI
<sequence> : <time-stamp> : %<facility> - <severity> - <MNEMONIC> : <description>
```

### SYSLOG Configuration

```CLI
!CONFIGURE LOGGING TO THE CONSOLE LINE (SEVERITY LEVEL 6 AND HIGHER)
Router(config)#logging console 6

!CONFIGURE LOGGING TO THE VTY LINES (SEVERITY LEVEL 'INFORMATIONAL'(6) AND HIGHER)
Router(config)#logging monitor informational

!CONFIGURE LOGGING TO THE BUFFER, WITH ALLOCATED BUFFER SIZE OF 8192 BYTES, FOR MESSAGES OF SEVERITY 6 AND ABOVE
Router(config)#logging buffered 8192 6

!CONFIGURE LOGGING TO AN EXTERNAL SERVER
Router(config)#logging 192.168.1.100

!OR
Router(config)#logging host 192.168.1.100

!FOR LOGGING TO AN EXTERNAL SERVER SPECIFIED ABOVE, WE THEN CONFIGURE THE LOGGING SEVERITY LEVEL (DEBUGGING IS LEVEL 7)
Router(config)#logging trap debugging
```
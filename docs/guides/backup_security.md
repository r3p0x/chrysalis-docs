---
description: How to back up your account, restore an account from a backup, export a user's Stronghold, rekey Stronghold.
image: /img/logo/Chrysalis_logo_dark.png
keywords:
- stronghold
- checklist
- backup
- DMZ
- account
- restore
- export
- rekey
---

# Backup and Security

## Security Checklist

- I use Stronghold.
- I use a strong password (32 character length, Shannon Entropy ~ 4.0) for encrypting the stronghold.
- I rotate the stronghold password on a regular basis.
- I create a daily backup of the stronghold.snapshot file.
- I keep a secure history of passwords used for recovery.
- I use a secure password management service that integrates with the server.
- I use a linux based server (best memory security).
- I have isolated my server behind a DMZ.
- Don't use SQLite.
- Don't store passwords and backups on the same device.

## How to Backup Your Account

You can use a copy of the `stronghold.snapshot` file as a backup. You can implement a  [_cronjob_](https://linux.die.net/man/1/crontab), [_rsync_](https://linux.die.net/man/1/rsync) or [_scp_](https://linux.die.net/man/1/scp) with a date-time suffix to periodically back up your account.

## How to Restore From a Backup

Simply place a snapshot file in the directory that wallet.rs expects.

## How to Export a User's Stronghold

You can create a new Stronghold snapshot on the fly to allow a user to leave your service and retain their key.

## How to Rekey a Stronghold/Password Rotation

The procedure for changing a Stronghold password is "simple": you read a snapshot into a vault and then write it out with a new encryption password. [See this code for the source.](https://github.com/iotaledger/wallet.rs/blob/d1b8893d73aae35dfcf7c5c8006e2177988d25d0/src/stronghold.rs#L436-L451)

:::tip

For obvious reasons, old snapshot backups will not be "rekeyed", so you have to track your old passwords. 

:::

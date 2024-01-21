#!/bin/bash
kill $(ps -ef | grep -v grep | grep pnpm | awk '{print $2}') 2>/dev/null 
kill $(ps -ef | grep -v grep | grep next | awk '{print $2}') 2>/dev/null 

export NOTION_PAGE_ID=9a42a58389b34995b712be7f57baf19c
export NOTION_SPACE_ID=aaef7a1a-eaa4-4ea6-bf5d-8f2fa0d98b9c
pnpm dev

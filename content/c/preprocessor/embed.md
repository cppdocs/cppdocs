---
title: "Binary resource inclusion (since C23)"
source_path: "c/preprocessor/embed"
category: "c"
---

#embed is a preprocessor directive to include (binary) resources in the build, where a resource is defined as a source of data accessible from the translation environment.

## Example
```cpp
#include <stdint.h>
#include <stdio.h>
 
const uint8_t image_data[] = {
#embed "image.png"
};
 
const char message[] = {
#embed "message.txt" if_empty('M', 'i', 's', 's', 'i', 'n', 'g', '\n')
,'\0' // null terminator
};
 
void dump(const uint8_t arr[], size_t size)
{
    for (size_t i = 0; i != size; ++i)
        printf("%02X%c", arr[i], (i + 1) % 16 ? ' ' : '\n');
    puts("");
}
 
int main()
{
    puts("image_data[]:");
    dump(image_data, sizeof image_data);
    puts("message[]:");
    dump((const uint8_t*)message, sizeof message);
}
```

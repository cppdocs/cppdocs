---
title: "std::ios_base::imbue"
source_path: "cpp/io/ios_base/imbue"
category: "io"
---

Sets the associated locale of the stream to loc. Before returning, each function, registered by [register_callback()](/cpp/io/ios_base/register_callback/) is called with imbue_event as a parameter.

## Declarations
```cpp
std::locale imbue( const std::locale& loc );
```

## Parameters
- `loc`: new locale to associate the stream to

## Return value
The locale object associated with the stream before the operation.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 47 | C++98 | the return value was misspecified as the return value of getloc() | corrected |
| LWG 156 | C++98 | the type of loc was const std::locale | corrected to const std::locale& |

## See also
- [getloc](/cpp/io/ios_base/getloc/)

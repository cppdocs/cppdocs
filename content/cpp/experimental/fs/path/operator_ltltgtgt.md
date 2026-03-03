---
title: "operator<<,>>(std::experimental::filesystem::path)"
source_path: "cpp/experimental/fs/path/operator"
category: "experimental"
---

Performs stream input or output on the path p. [std::quoted](/cpp/io/manip/quoted/) is used so that spaces do not cause truncation when later read by stream input operator.

## Declarations
```cpp
template< class CharT, class Traits >
std::basic_ostream<CharT,Traits>&
operator<<( std::basic_ostream<CharT,Traits>& os, const path& p );
```
_(filesystem TS)_

```cpp
template< class CharT, class Traits >
std::basic_istream<CharT,Traits>&
operator>>( std::basic_istream<CharT,Traits>& is, path& p );
```
_(filesystem TS)_

## Parameters
- `os`: stream to perform output on
- `is`: stream to perform input on
- `p`: path to insert or extract

## Example
This section is incompleteReason: no example

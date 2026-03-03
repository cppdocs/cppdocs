---
title: "operator<<,>>(std::philox_engine)"
source_path: "cpp/numeric/random/philox_engine/operator"
category: "numeric"
since: "C++26"
---

1) Writes the textual representation of the current state of e to os with fmtflags set to [std::ios_base::dec](/cpp/io/ios_base/fmtflags/) | [std::ios_base::left](/cpp/io/ios_base/fmtflags/) and the fill character set to the space character.

## Declarations
```cpp
template< class CharT, class Traits >
friend std::basic_ostream<CharT, Traits>&
operator<<( std::basic_ostream<CharT, Traits>& os,
const philox_engine& e );
```
_(since C++26)_

```cpp
template< class CharT, class Traits >
friend std::basic_istream<CharT, Traits>&
operator>>( std::basic_istream<CharT, Traits>& is,
philox_engine& e );
```
_(since C++26)_

## Parameters
- `os`: output stream to insert the data to
- `is`: input stream to extract the data from
- `e`: pseudo-random number engine

---
title: "operator<<,>>(std::shuffle_order_engine)"
source_path: "cpp/numeric/random/shuffle_order_engine/operator"
category: "numeric"
since: "C++11"
---

1) Serializes the internal state of the pseudo-random number engine adaptor as a sequence of decimal numbers separated by one or more spaces, and inserts it to the stream ost. The fill character and the formatting flags of the stream are ignored and unaffected.

## Declarations
```cpp
template< class CharT, class Traits >
friend std::basic_ostream<CharT,Traits>&
operator<<( std::basic_ostream<CharT,Traits>& ost,
shuffle_order_engine<>& e );
```
_(since C++11)_

```cpp
template< class CharT, class Traits >
friend std::basic_istream<CharT,Traits>&
operator>>( std::basic_istream<CharT,Traits>& ist,
shuffle_order_engine& e );
```
_(since C++11)_

## Parameters
- `ost`: output stream to insert the data to
- `ist`: input stream to extract the data from
- `e`: engine adaptor to serialize or restore

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3519 | C++11 | the form of insertion and extraction operators were unspecified | specified to be hidden friends |

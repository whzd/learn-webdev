import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Int "mo:base/Int";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
   stable var currentValue: Float = 300;
  // currentValue := 100;

  var startTime = Time.now();
  // Debug.print(debug_show(startTime));

  public func topUp(amount: Float): async Float {
    currentValue += amount;
    return currentValue;
  };

  public func withdraw(amount: Float): async Float {
    let tempValue: Float = currentValue - amount;
    if (tempValue >= 0){
      currentValue -= amount;
      return currentValue
    } else {
      Debug.print("Amount too large, currentValue less than zero.");
      return 0
    }
  };

  public query func checkBalance(): async Float {
    return currentValue;
  };

  public func compound() {
    let currentTime = Time.now();
    let timeElapsed = (currentTime - startTime) / 1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsed));
    startTime := currentTime;
  };

}

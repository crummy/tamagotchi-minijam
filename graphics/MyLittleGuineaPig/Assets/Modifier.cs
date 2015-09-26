using UnityEngine;
using System.Collections;

public enum PigPropertyTypes {
	Health,
	Cuteness,
	Mood, 
	Genpurity,
	Fullness,
	Radioactivity
}

public class PigProperty {
	public string Name;
	public float CurrentValue;
	public float Min;
	public float Max;

	public PigProperty() {
		this.CurrentValue = 50F;
	}
}

public class PigHealthProperty : PigProperty {
	public PigHealthProperty () {
		this.Min = 0;
		this.Max = 100;
		this.Name = "Health";
	}
}

public class PigCutenessProperty : PigProperty {
	public PigCutenessProperty() {
		this.Min = 0;
		this.Max = 100;
		this.Name = "Health";
	}
}

public class PigMoodProperty : PigProperty {
	public PigMoodProperty() {
		this.Min = 0;
		this.Max = 100;
		this.Name = "Mood";
	}
}

public class PigFullnessProperty : PigProperty {
	public PigFullnessProperty() {
		this.Min = 0;
		this.Max = 100;
		this.Name = "Fullness";
	}
}

public class PigRadioactivityProperty : PigProperty {
	public PigRadioactivityProperty() {
		this.Min = 0;
		this.Max = 100;
		this.Name = "Fullness";
	}
}

public class PigPurityOfGenProperty : PigProperty {
	public PigPurityOfGenProperty() {
		this.Min = 0;
		this.Max = 100;
		this.Name = "Purity of gen";
	}
}

public class Modifier {
	public float CurrentLifeTime;
	public float LifeTime;
	public float Strength;
	public PigPropertyTypes AffectedProperty;
}

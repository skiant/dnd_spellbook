class spell {
	constructor(name, level, domain) {
		this.name = name;
		this.level = level;
		this.domain = domain;
		this.prepared = 0;
	}

	belongsToDomain(domain) {
		return this.domain === domain;
	}

	prepare() {
		this.prepared++;
	}

	cast() {
		if (this.prepared <= 0) {
			return false;
		}
		this.prepared--;
		return true;
	}
}

export default spell;
